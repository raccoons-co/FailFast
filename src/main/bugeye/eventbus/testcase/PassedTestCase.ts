import Neuron from "../Neuron";
import TestCase from "./TestCase";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";

//@Immutable
export default class PassedTestCase implements Neuron {

    private readonly testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = testCase;
    }

    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.constructor.name, this.testCase.toString()));
    }
}
