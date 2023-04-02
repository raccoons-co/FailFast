import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import TestCase from "./bugeye/eventbus/test/TestCase";

@Immutable
class Test implements Annotation {

    public decorator(): Method {
        return this.learnNewTestCase;
    }

    private learnNewTestCase(originalMethod: Method,
                             context: ClassMethodDecoratorContext): void {
        Brain.instance()
            .learn(TestCase, new TestCase(originalMethod, context));
    }
}

export default new Test().decorator();
