import {Immutable, Strict} from "@raccoons-co/ethics";
import {Any, Class, Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";
import Stopwatch from "../../../util/Stopwatch";
import LogRecord from "./LogRecord";
import ThrownException from "./ThrownException";
import AssignedAfterEach from "./AssignedAfterEach";
import RecognitionPayload from "../RecognitionPayload";
import AssignedBeforeEach from "./AssignedBeforeEach";

@Immutable
export default class AssignedTestCase implements Neuron {

    private readonly method: Method;
    private readonly stopwatch: Stopwatch;
    private readonly args: Any[];

    constructor(method: Method, ...args: Any[]) {
        this.method = Strict.notNull(method);
        this.args = Strict.notNull(args);
        this.stopwatch = new Stopwatch();
    }

    public activate(payload: RecognitionPayload) {
        try {
            Strict.notNull(payload);
            const testClass = <Class>payload.valueOf();
            const testClassInstance = new testClass;

            Brain.instance()
                .recognize(AssignedBeforeEach, new RecognitionPayload(testClassInstance));

            this.stopwatch.start();
            this.method.call(testClassInstance, ...this.args);
            this.stopwatch.stop();

            this.handlePassedTestCase(testClassInstance);
        } catch (error) {
            this.stopwatch.stop();

            this.handleFailedTestCase(<Class>payload.valueOf(), <FailedTestCaseException>error);
        }
    }

    private handlePassedTestCase(testClassInstance: object): void {
        const logRecord = this.logRecord("Passed", testClassInstance.constructor.name);
        Brain.instance()
            .learn(PassedTestCase, new PassedTestCase(logRecord))
            .recognize(AssignedAfterEach, new RecognitionPayload(testClassInstance));
    }

    private handleFailedTestCase(testClass: Class, exception: FailedTestCaseException): void {
        const logRecord = this.logRecord("Failed", testClass.name);
        Brain.instance()
            .learn(FailedTestCase, new FailedTestCase(logRecord))
            .learn(ThrownException, new ThrownException(exception));
    }

    private logRecord(testStatus: string, testClassName: string): LogRecord {
        return LogRecord.newBuilder()
            .addField(testStatus)
            .addField(this.stopwatch.elapsedTime().toFixed(3))
            .addField(testClassName)
            .addField(this.method.name)
            .build();
    }
}
