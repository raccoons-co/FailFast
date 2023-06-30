import {Immutable, Strict} from "@raccoons-co/ethics";
import {Class} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import AssignedTestCase from "./AssignedTestCase";
import AfterEachTestCase from "./AfterEachTestCase";
import RecognitionPayload from "../RecognitionPayload";

@Immutable
export default class AssignedTestClass implements Neuron {

    private readonly testClass: Class;

    constructor(testClass: Class) {
        this.testClass = Strict.notNull(testClass);
    }

    activate(): void {
        Brain.instance()
            .recognize(AssignedTestCase, new RecognitionPayload(new this.testClass))
            .forget(AssignedTestCase)
            .forget(AfterEachTestCase);
    }
}
