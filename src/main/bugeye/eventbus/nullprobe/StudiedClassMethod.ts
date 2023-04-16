import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";

@Immutable
export default class StudiedClassMethod implements Neuron {

    private readonly instance: object;
    private readonly method: Method;

    constructor(probedClass: object,
                method: Method) {
        this.instance = Strict.notNull(probedClass);
        this.method = Strict.notNull(method);
    }

    activate(): void {
        this.method.call(this.instance, ...this.nullArgs());
    }

    private nullArgs(): Array<null> {
        return new Array(this.method.length).fill(null);
    }
}
