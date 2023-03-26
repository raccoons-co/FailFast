import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
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
