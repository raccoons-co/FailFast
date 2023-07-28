import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedArgumentsSource from "./bugeye/eventbus/neuron/AssignedArgumentsSource";
import Arguments from "./util/Arguments";

/**
 * `@ArgumentsSource` is a repeatable annotation that is used to provide an `Array` of `Arguments`
 * that will be used to invoke the parameterized test method.
 */
@Immutable
class ArgumentsSource implements Annotation {

    public decorator(args: Array<Arguments>): Method {

        Strict.notNull(args);

        return function learnArgumentsSource(originalMethod: Method, context: ClassMethodDecoratorContext): void {

            Strict.notNull(context);
            Strict.checkArgument(String(context.kind) === "method");

            Brain.instance()
                .learn(AssignedArgumentsSource, new AssignedArgumentsSource(originalMethod, args));
        };
    }
}

export default new ArgumentsSource().decorator;
