import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import AssignedTestCase from "./AssignedTestCase";

@Immutable
export default class AssignedRepeatedTest implements Neuron {

    private readonly method: Method;
    private readonly repetitions: number;

    constructor(method: Method, repetitions: number) {
        this.method = Strict.notNull(method);
        this.repetitions = Strict.notNull(repetitions);
    }

    activate(): void {
        for (let i = 0; i < this.repetitions; i++) {
            Brain.instance()
                .learn(AssignedTestCase, new AssignedTestCase(this.method));
        }
    }
}
