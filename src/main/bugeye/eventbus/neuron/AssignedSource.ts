import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import AssignedTestCase from "./AssignedTestCase";
import Arguments from "../../../util/Arguments";

@Immutable
export default class AssignedSource implements Neuron {

    private readonly method: Method;
    private readonly parametersSource: Array<Arguments>;

    constructor(method: Method, parametersSource: Array<Arguments>) {
        this.method = Strict.notNull(method);
        this.parametersSource = Strict.notNull(parametersSource);
    }

    activate(): void {
        this.parametersSource.forEach(
            (rest: Arguments) => {
                Brain.instance()
                    .learn(AssignedTestCase, new AssignedTestCase(this.method, ...rest));
            }
        );
    }
}
