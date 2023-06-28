import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Class, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedTestCase from "./bugeye/eventbus/test/AssignedTestCase";

@Immutable
class TestClass implements Annotation {
    public decorator(): Method {
        return this.replacementClass;
    }

    private replacementClass<C extends Class>(
        originalClass: C,
        context: ClassDecoratorContext): Class {

        Strict.notNull(context);

        Brain.instance()
            .memory(AssignedTestCase)
            .forEach((neuron) => neuron.activate(new originalClass));

        Brain.instance()
            .forget(AssignedTestCase);

        return originalClass;
    }
}

export default new TestClass().decorator();
