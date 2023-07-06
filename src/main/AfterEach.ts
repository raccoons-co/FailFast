import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedAfterEach from "./bugeye/eventbus/neuron/AssignedAfterEach";

/**
 * `@AfterEach` is used to annotate a method that will be executed after each `@Test` method
 * in the current test class.
 *
 * @public
 */
@Immutable
class AfterEach implements Annotation {

    public decorator(): Method {
        return this.learnAfterEach;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private learnAfterEach(originalMethod: Method, context: ClassMethodDecoratorContext): void {
        Brain.instance()
            .learn(AssignedAfterEach, new AssignedAfterEach(originalMethod));
    }
}

export default new AfterEach().decorator();
