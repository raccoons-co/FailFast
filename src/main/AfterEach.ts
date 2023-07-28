import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedAfterEach from "./bugeye/eventbus/neuron/AssignedAfterEach";

/**
 * `@AfterEach` is used to annotate a transition method that will be executed after each
 * test method in the current test class.
 *
 * @public
 */
@Immutable
class AfterEach implements Annotation {

    public decorator(): Method {
        return this.learnAfterEach;
    }

    private learnAfterEach(originalMethod: Method, context: ClassMethodDecoratorContext): void {

        Strict.notNull(context);
        Strict.checkArgument(String(context.kind) === "method");

        Brain.instance()
            .learn(AssignedAfterEach, new AssignedAfterEach(originalMethod));
    }
}

export default new AfterEach().decorator();
