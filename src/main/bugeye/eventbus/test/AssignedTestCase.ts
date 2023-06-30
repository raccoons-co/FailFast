import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
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

    constructor(method: Method) {
        this.method = Strict.notNull(method);
        this.stopwatch = new Stopwatch();
    }

    public activate(testClassInstance: RecognitionPayload) {
        try {
            Strict.notNull(testClassInstance);

            this.stopwatch.start();
            this.method.call(testClassInstance.valueOf());
            this.stopwatch.stop();

            const logRecord = this.logRecord("Passed", testClassInstance.valueOf().constructor.name);
            Brain.instance()
                .learn(PassedTestCase, new PassedTestCase(logRecord))
        } catch (error) {
            this.stopwatch.stop();

            const logRecord = this.logRecord("Failed", testClassInstance.valueOf().constructor.name);
            Brain.instance()
                .learn(FailedTestCase, new FailedTestCase(logRecord))
                .learn(ThrownException, new ThrownException(error as FailedTestCaseException));
        } finally {
            Brain.instance()
                .recognize(AfterEachTestCase, testClassInstance);
        }
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
