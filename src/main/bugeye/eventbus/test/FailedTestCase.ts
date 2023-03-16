import Neuron from "../Neuron";
import Immutable from "../../../Immutable";
import TestCase from "./TestCase";
import FailedTestCaseException from "./FailedTestCaseException";
import Brain from "../Brain";
import Log from "../../../Log";
import LogRecord from "../common/LogRecord";
import ThrownException from "../common/ThrownException";
import Check from "../../ethics/Check";

@Immutable
export default class FailedTestCase implements Neuron {

    private readonly testCase: TestCase;
    private readonly exception: FailedTestCaseException;

    constructor(testCase: TestCase,
                exception: FailedTestCaseException) {
        this.testCase = Check.notNull(testCase);
        this.exception = Check.notNull(exception);
    }

    @Log
    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.testCase.toString(), this.exception.message.toString()))
            .learn(ThrownException, new ThrownException(this.exception));
    }
}
