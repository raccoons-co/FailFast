import Annotation from "./Annotation";
import Any from "./type/Any";
import Method from "./type/Method";
import Class from "./type/Class";

class Immutable implements Annotation {

    public decorator(): Method {
        return this.classDecorator;
    }

    private classDecorator<C extends Class>(
        target: C,
        context: ClassDecoratorContext): Class {

        return class ImmutableObject extends target {
            private readonly parentClass: string;
            constructor(...args: Any[]) {
                super(...args);
                this.parentClass = String(context.name);
                Object.freeze(this);
            }
        }
    }
}

export default new Immutable().decorator();
