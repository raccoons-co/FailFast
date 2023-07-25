import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedTestCase from "./bugeye/eventbus/neuron/AssignedTestCase";

/**
 * `@Test` is used to annotate a method as test method to test the correct behaviour/functionality,
 * features of an application.
 *
 * Test methods must not be private or static and must not return a value.
 * Each test is executed separately with own object of a test class.
 *
 * @public
 */
@Immutable
class Test implements Annotation {

    public decorator(): Method {
        return this.learnTestCase;
    }

    private learnTestCase(originalMethod: Method, context: ClassMethodDecoratorContext): void {

        Strict.notNull(context);
        Strict.argument(String(context.kind) === "method");

        Brain.instance()
            .learn(AssignedTestCase, new AssignedTestCase(originalMethod));
    }
}

export default new Test().decorator();
