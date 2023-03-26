import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import TestCase from "./bugeye/eventbus/test/TestCase";
import Brain from "./bugeye/eventbus/Brain";
import StartedTestCase from "./bugeye/eventbus/test/StartedTestCase";

@Immutable
class Test implements Annotation {

    public decorator(): Method {
        return this.learnNewTestCase;
    }

    private learnNewTestCase(originalMethod: Method,
                             context: ClassMethodDecoratorContext): void {
        const testCase = new TestCase(originalMethod, context);
        Brain.instance()
            .learn(StartedTestCase, new StartedTestCase(testCase));
    }
}

export default new Test().decorator();
