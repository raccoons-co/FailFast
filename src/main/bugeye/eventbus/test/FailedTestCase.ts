import Neuron from "../Neuron";
import FailedTestCaseException from "./FailedTestCaseException";
import TestCase from "./TestCase";
import Log from "../../../Log";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import ThrownException from "../common/ThrownException";

//@Immutable
export default class FailedTestCase implements Neuron {

    private readonly testCase: TestCase;
    private readonly exception: FailedTestCaseException;

    constructor(testCase: TestCase, exception: FailedTestCaseException) {
        this.testCase = testCase;
        this.exception = exception;
    }

    @Log
    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.testCase.toString()))
            .learn(ThrownException, new ThrownException(this.exception))
    }
}
