import {Immutable, Strict} from "@raccoons-co/ethics";
import {Any, Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import AssignedTestCase from "./AssignedTestCase";

@Immutable
export default class AssignedValueSource implements Neuron {

    private readonly method: Method;
    private readonly parametersSource: Any[];

    constructor(method: Method, argumentsSource: Any[]) {
        this.method = Strict.notNull(method);
        this.parametersSource = Strict.notNull(argumentsSource);
    }

    activate(): void {
        this.parametersSource.forEach(
            (rest) => {
                Brain.instance()
                    .learn(AssignedTestCase, new AssignedTestCase(this.method, ...rest));
            }
        );
    }
}
