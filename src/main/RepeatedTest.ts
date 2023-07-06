import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignRepeatedTest from "./bugeye/eventbus/neuron/AssignRepeatedTest";

@Immutable
class RepeatedTest implements Annotation {

    public decorator(repetitions: number): Method {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return function handleRepeatedTest(originalMethod: Method, context: ClassMethodDecoratorContext): void {
            Brain.instance()
                .learn(AssignRepeatedTest, new AssignRepeatedTest(originalMethod, repetitions))
                .recognize(AssignRepeatedTest)
                .forget(AssignRepeatedTest);
        };
    }
}

export default new RepeatedTest().decorator;
