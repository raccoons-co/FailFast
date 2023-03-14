import Neuron from "../Neuron";
import Immutable from "../../../Immutable";
import TestCase from "./TestCase";
import Log from "../../../Log";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";

@Immutable
export default class PassedTestCase implements Neuron {

    private readonly testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = testCase;
    }

    @Log
    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.testCase.toString()));
    }
}
