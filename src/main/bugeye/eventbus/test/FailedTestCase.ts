import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import FailedTestCaseException from "./FailedTestCaseException";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import ThrownException from "../common/ThrownException";
import TestCase from "./TestCase";

@Immutable
export default class FailedTestCase implements Neuron {

    private readonly testCase: TestCase;
    private readonly exception: FailedTestCaseException;

    constructor(testCase: TestCase,
                exception: FailedTestCaseException) {
        this.testCase = Strict.notNull(testCase);
        this.exception = Strict.notNull(exception);
    }

    public activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord("Failed", this.testCase.toString(), this.exception.message.toString()))
            .learn(ThrownException, new ThrownException(this.exception));
    }
}
