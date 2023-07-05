import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import AssignedTestCase from "./AssignedTestCase";
import Arguments from "../../../util/Arguments";

@Immutable
export default class AssignedArgumentsSource implements Neuron {

    private readonly method: Method;
    private readonly argumentsSource: Array<Arguments>;

    constructor(method: Method, argumentsSource: Array<Arguments>) {
        this.method = Strict.notNull(method);
        this.argumentsSource = Strict.notNull(argumentsSource);
    }

    activate(): void {
        this.argumentsSource.forEach(
            (rest: Arguments) => {
                Brain.instance()
                    .learn(AssignedTestCase, new AssignedTestCase(this.method, ...rest));
            }
        );
    }
}
