import Neuron from "../Neuron";
import FailedTestCaseException from "./FailedTestCaseException";
import TestCase from "./TestCase";
import Brain from "../Brain";
import NegativeDiagnose from "./NegativeDiagnose";
import LogRecord from "../common/LogRecord";

//@Immutable
export default class FailedTestCase implements Neuron {

    private readonly testCase: TestCase;
    private readonly exception: FailedTestCaseException;

    constructor(testCase: TestCase, exception: FailedTestCaseException) {
        this.testCase = testCase;
        this.exception = exception;
    }

    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.constructor.name, this.testCase.toString()))
            .learn(NegativeDiagnose, new NegativeDiagnose(this.testCase))
    }
}
