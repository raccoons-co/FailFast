import SensorNeuron from "../SensorNeuron";
import FailedTestCaseException from "./FailedTestCaseException";
import TestCase from "../../TestCase";
import Brain from "../Brain";
import {Signal} from "../Signal";
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
            .learn(Signal.LOG, new LogRecord(this.constructor.name, this.testCase.toString()))
            .learn(Signal.DIAGNOSE, new NegativeDiagnose(this.testCase))
    }
}
