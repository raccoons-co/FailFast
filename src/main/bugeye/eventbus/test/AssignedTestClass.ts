import {Immutable, Strict} from "@raccoons-co/ethics";
import {Class} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import AssignedTestCase from "./AssignedTestCase";

@Immutable
export default class AssignedTestClass implements Neuron {

    private readonly testClass: Class;

    constructor(testClass: Class) {
        this.testClass = Strict.notNull(testClass);
    }

    activate(): void {
        Brain.instance()
            .memory(AssignedTestCase)
            .forEach((neuron) => neuron.activate(new this.testClass));

        Brain.instance()
            .forget(AssignedTestCase);
    }
}
