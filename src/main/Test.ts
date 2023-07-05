import {Immutable} from "@raccoons-co/ethics";
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
        return this.learnAssignedTestCase;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private learnAssignedTestCase(originalMethod: Method, context: ClassMethodDecoratorContext): void {
        Brain.instance()
            .learn(AssignedTestCase, new AssignedTestCase(originalMethod));
    }
}

export default new Test().decorator();
