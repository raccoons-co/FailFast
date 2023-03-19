/* eslint-disable */
import Annotation from "./Annotation";

class Immutable implements Annotation<Function> {

    public decorator(): Function {
        return this.immutableObject;
    }

    private immutableObject<Class extends new (...args: any[]) => any>(
        target: Class,
        context: ClassDecoratorContext): Function {

        return class ImmutableObject extends target {
            private readonly parentClass: string;
            constructor(...args: any[]) {
                super(...args);
                this.parentClass = String(context.name);
                Object.freeze(this);
            }
        }
    }
}

export default new Immutable().decorator();
