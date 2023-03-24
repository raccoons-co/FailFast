import Annotation from "./Annotation";
import Method from "./type/Method";
import Class from "./type/Class";
import Any from "./type/Any";

class Immutable implements Annotation {

    public decorator(): Method {
        return this.replacementClass;
    }

    /**
     * Returns extended class which prevents mutation of the original class instances.
     *
     * @template C The type of the decorated class
     * @param originalClass The class to decorate
     * @param context The context provided to a class decorator
     * @return Class ImmutableObject.
     */
    private replacementClass<C extends Class>(
        originalClass: C,
        context: ClassDecoratorContext): Class {

        return class ImmutableObject extends originalClass {

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
