/* eslint-disable */
import Log from "./Log";
import Annotation from "./Annotation";

class Immutable implements Annotation<Function> {

    @Log
    public decorator(): Function {
        return this.immutableObject;
    }

    private immutableObject<T extends { new(...args: any[]): object }>(target: T) {
        return class ImmutableObject extends target {
            constructor(...args: any[]) {
                super(...args);
                Object.freeze(this);
            }
        }
    }
}

export default new Immutable().decorator();
