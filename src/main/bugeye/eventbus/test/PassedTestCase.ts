import Immutable from "../../../Immutable";
import Neuron from "../Neuron";
import Strict from "../../ethics/Strict";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import TestCase from "./TestCase";

@Immutable
export default class PassedTestCase implements Neuron {

    private readonly testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = Strict.notNull(testCase);
    }

    public activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord("Passed", this.testCase.toString()));
    }
}
