import Neuron from "../Neuron";
import TestCase from "./TestCase";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import Log from "../../../Log";
import Immutable from "../../../Immutable";

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
