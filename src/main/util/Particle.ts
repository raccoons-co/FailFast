import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";

@Immutable
export default class Particle {

    private readonly instance: object;

    constructor(instance: object) {
        this.instance = Strict.notNull(instance);
    }

    private prototype() {
        return Object.getPrototypeOf(this.instance);
    }

    public names(): Array<string> {
        return Object.getOwnPropertyNames(this.prototype())
            .filter(methodName => methodName !== "constructor")
    }

    public methods(): Array<Method> {
        return this.names()
            .map(methodName => Object.getOwnPropertyDescriptor(this.prototype(), methodName)?.value);
    }
}
