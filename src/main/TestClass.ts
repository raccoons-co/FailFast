import {Immutable} from "@raccoons-co/ethics";
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private handleTestClass(originalClass: Class, context: ClassDecoratorContext): Class {
        Brain.instance()
            .learn(AssignedTestClass, new AssignedTestClass(originalClass))
            .recognize(AssignedTestClass)
            .forget(AssignedTestClass);
        return originalClass;
    }
}

export default new TestClass().decorator();
