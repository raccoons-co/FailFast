import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedRepeatedTest from "./bugeye/eventbus/neuron/AssignedRepeatedTest";


/**
 * `@RepeatedTest` is used to annotate a method as test *template* method that should be repeated
 * a specified number of times.
 *
 * Repeated test behaves like a regular `@Test` method.
 *
 * @public
 */
@Immutable
class RepeatedTest implements Annotation {

    public decorator(repetitions: number): Method {

        Strict.checkArgument(Number.isInteger(repetitions));
        Strict.checkArgument(repetitions > 0);

        return function handleRepeatedTest(originalMethod: Method, context: ClassMethodDecoratorContext): void {

            Strict.notNull(context);
            Strict.checkArgument(String(context.kind) === "method");

            Brain.instance()
                .learn(AssignedRepeatedTest, new AssignedRepeatedTest(originalMethod, repetitions))
                .recognize(AssignedRepeatedTest)
                .forget(AssignedRepeatedTest);
        };
    }
}

export default new RepeatedTest().decorator;
