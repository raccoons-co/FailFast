import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Class, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedTestClass from "./bugeye/eventbus/neuron/AssignedTestClass";

/**
 * `@TestClass` is used to annotate a class that contains test methods.
 *
 * @public
 */
@Immutable
class TestClass implements Annotation {

    public decorator(): Method {
        return this.handleTestClass;
    }

    private handleTestClass(originalClass: Class, context: ClassDecoratorContext): Class {
        Strict.notNull(context);
        Strict.checkArgument(String(context.kind) === "class");

        Brain.instance()
            .learn(AssignedTestClass, new AssignedTestClass(originalClass))
            .recognize(AssignedTestClass)
            .forget(AssignedTestClass);

        return originalClass;
    }
}

export default new TestClass().decorator();
