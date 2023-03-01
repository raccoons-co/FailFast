import SensorNeuron from "../SensorNeuron";
import Brain from "../Brain";
import {Signal} from "../Signal";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";
import TestCase from "../../TestCase";
import LogRecord from "./LogRecord";

//@Immutable
export default class StartedTestCase implements SensorNeuron {

    private readonly testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = testCase;
    }

    public activate() {
        try {
            Brain.instance()
                .learn(Signal.LOG, new LogRecord(this.constructor.name , this.testCase.toString()));
            this.testCase.method()
                .apply(this.testCase.object());
            Brain.instance()
                .learn(Signal.TEST_CASE_PASSED, new PassedTestCase(this.testCase))
        } catch (error) {
            Brain.instance()
                .learn(Signal.TEST_CASE_FAILED, new FailedTestCase(this.testCase, error as FailedTestCaseException));
        }
    }
}
