import SensorNeuron from "../SensorNeuron";
import TestCase from "./TestCase";
import Brain from "../Brain";
import LogRecord from "./LogRecord";

//@Immutable
export default class PassedTestCase implements SensorNeuron {

    private readonly testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = testCase;
    }

    activate(): void {
        Brain.instance()
            .learn(LogRecord.name, new LogRecord(this.constructor.name, this.testCase.toString()));
    }
}
