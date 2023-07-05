import {Immutable, Strict} from "@raccoons-co/ethics";
import {Any, Class, Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";
import Stopwatch from "../../../util/Stopwatch";
import LogRecordBuilder from "../common/LogRecordBuilder";
import ThrownException from "../common/ThrownException";
import LogRecord from "../common/LogRecord";
import AfterEachTestCase from "./AfterEachTestCase";
import RecognitionPayload from "../RecognitionPayload";

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
            const testClass: Class = Strict.notNull(payload).valueOf();
            const testClassInstance = new testClass;

            this.stopwatch.start();
            this.method.call(testClassInstance, ...this.args);
            this.stopwatch.stop();

            this.handlePassedTestCase(testClassInstance);
        } catch (error) {
            this.stopwatch.stop();

            this.handleFailedTestCase(payload.valueOf(), error as FailedTestCaseException);
        }
    }

    private handlePassedTestCase(testClassInstance: object): void {
        const logRecord = this.logRecord("Passed", testClassInstance.constructor.name);
        Brain.instance()
            .learn(PassedTestCase, new PassedTestCase(logRecord))
            .recognize(AfterEachTestCase, new RecognitionPayload(testClassInstance));
    }

    private handleFailedTestCase(testClass: Class, exception: FailedTestCaseException): void {
        const logRecord = this.logRecord("Failed", testClass.name);
        Brain.instance()
            .learn(FailedTestCase, new FailedTestCase(logRecord))
            .learn(ThrownException, new ThrownException(exception));
    }

    private logRecord(testStatus: string, testClassName: string): LogRecord {
        return new LogRecordBuilder()
            .addField(testStatus)
            .addField(this.stopwatch.elapsedTime().toFixed(3))
            .addField(testClassName)
            .addField(this.method.name)
            .build();
    }
}
