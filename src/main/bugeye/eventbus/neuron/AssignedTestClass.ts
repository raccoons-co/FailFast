import {Immutable, Strict} from "@raccoons-co/ethics";
import {Class} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import AssignedTestCase from "./AssignedTestCase";
import AssignedAfterEach from "./AssignedAfterEach";
import RecognitionPayload from "../RecognitionPayload";
import AssignedBeforeEach from "./AssignedBeforeEach";
import AssignedClassDisplayName from "./AssignedClassDisplayName";

@Immutable
export default class AssignedTestClass implements Neuron {

    private readonly testClass: Class;

    constructor(testClass: Class) {
        this.testClass = Strict.notNull(testClass);
    }

    activate(): void {
        Brain.instance()
            .recognize(AssignedTestCase, new RecognitionPayload(this.testClass))
            .forget(AssignedTestCase)
            .forget(AssignedBeforeEach)
            .forget(AssignedAfterEach)
            .forget(AssignedClassDisplayName);
    }
}
