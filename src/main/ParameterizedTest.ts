import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedArgumentsSource from "./bugeye/eventbus/neuron/AssignedArgumentsSource";

/**
 * `@ParameterizedTest` is used to annotate a method as parameterized test method.
 *
 * `@ParameterizedTest` methods must specify at least one `@ArgumentsSource`.
 * Parameterized test behaves like a regular `@Test` method.
 *
 * @public
 */
@Immutable
class ParameterizedTest implements Annotation {

    public decorator(): Method {
        return this.handleParametrizedTest;
    }

    private handleParametrizedTest(originalMethod: Method, context: ClassMethodDecoratorContext): void {

        Strict.notNull(context);
        Strict.argument(String(context.kind) === "method");

        Brain.instance()
            .recognize(AssignedArgumentsSource)
            .forget(AssignedArgumentsSource);
    }
}

export default new ParameterizedTest().decorator();
