/* eslint-disable */
import Annotation from "./Annotation";

class Immutable implements Annotation<Function> {

    public decorator(): Function {
        return this.immutableObject;
    }

    private immutableObject<TFunction extends { new(...args: any[]): object }>(target: TFunction): TFunction {
        return class ImmutableObject extends target {
            constructor(...args: any[]) {
                super(...args);
                Object.freeze(this);
            }
        }
    }
}

export default new Immutable().decorator();
