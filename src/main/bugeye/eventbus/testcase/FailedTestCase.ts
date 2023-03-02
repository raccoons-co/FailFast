import SensorNeuron from "../SensorNeuron";
import FailedTestCaseException from "./FailedTestCaseException";
import TestCase from "./TestCase";
import Brain from "../Brain";
import NegativeDiagnose from "./NegativeDiagnose";
import LogRecord from "./LogRecord";

//@Immutable
export default class FailedTestCase implements SensorNeuron {

    private readonly testCase: TestCase;
    private readonly exception: FailedTestCaseException;

    constructor(testCase: TestCase, exception: FailedTestCaseException) {
        this.testCase = testCase;
        this.exception = exception;
    }

    activate(): void {
        Brain.instance()
            .learn(LogRecord.name, new LogRecord(this.constructor.name, this.testCase.toString()))
            .learn(NegativeDiagnose.name, new NegativeDiagnose(this.testCase))
    }
}
