/* eslint-disable */
import Immutable from "./Immutable";
import TestCase from "./bugeye/eventbus/test/TestCase";
import Brain from "./bugeye/eventbus/Brain";
import StartedTestCase from "./bugeye/eventbus/test/StartedTestCase";
import Annotation from "./Annotation";

@Immutable
class Test implements Annotation<Function> {

    public decorator(): Function {
        return this.learnNewTestCase;
    }

    private learnNewTestCase(originalMethod: any,
                             context: ClassMethodDecoratorContext) {
        const testCase = new TestCase(originalMethod, context);
        Brain.instance()
            .learn(StartedTestCase, new StartedTestCase(testCase));
    }
}

export default new Test().decorator();
