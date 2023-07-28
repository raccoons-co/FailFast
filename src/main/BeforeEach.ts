import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedBeforeEach from "./bugeye/eventbus/neuron/AssignedBeforeEach";

/**
 * `@BeforeEach` is used to annotate a transition method that will be executed before each
 * test method in the current test class.
 *
 * @public
 */
@Immutable
class BeforeEach implements Annotation {

    public decorator(): Method {
        return this.learnAfterEach;
    }

    private learnAfterEach(originalMethod: Method, context: ClassMethodDecoratorContext): void {

        Strict.notNull(context);
        Strict.checkArgument(String(context.kind) === "method");

        Brain.instance()
            .learn(AssignedBeforeEach, new AssignedBeforeEach(originalMethod));
    }
}

export default new BeforeEach().decorator();
