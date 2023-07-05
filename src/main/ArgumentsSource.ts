import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedSource from "./bugeye/eventbus/neuron/AssignedSource";
import Arguments from "./util/Arguments";

/**
 * `@ArgumentsSource` is a repeatable annotation that is used to provide an `Array` of `Arguments`
 * that will be used to invoke the parameterized test method.
 */
@Immutable
class ArgumentsSource implements Annotation {

    public decorator(parameters: Array<Arguments>): Method {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return function learnSource(originalMethod: Method, context: ClassMethodDecoratorContext): void {
            Brain.instance()
                .learn(AssignedSource, new AssignedSource(originalMethod, parameters));
        };
    }
}

export default new ArgumentsSource().decorator;
