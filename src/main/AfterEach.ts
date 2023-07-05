import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedAfterEachMethod from "./bugeye/eventbus/neuron/AssignedAfterEachMethod";

/**
 * `@AfterEach` is used to annotate a method that will be executed after each `@Test` method
 * in the current test class.
 *
 * @public
 */
@Immutable
class AfterEach implements Annotation {

    public decorator(): Method {
        return this.learnAfterEachTestCase;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private learnAfterEachTestCase(originalMethod: Method, context: ClassMethodDecoratorContext): void {
        Brain.instance()
            .learn(AssignedAfterEachMethod, new AssignedAfterEachMethod(originalMethod));
    }
}

export default new AfterEach().decorator();
