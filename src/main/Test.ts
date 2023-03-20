import Immutable from "./Immutable";
import TestCase from "./bugeye/eventbus/test/TestCase";
import Brain from "./bugeye/eventbus/Brain";
import StartedTestCase from "./bugeye/eventbus/test/StartedTestCase";
import Annotation from "./Annotation";
import Method from "./type/Method";

@Immutable
class Test implements Annotation {

    public decorator(): Method {
        return this.methodDecorator;
    }

    private methodDecorator(target: Method,
                          context: ClassMethodDecoratorContext): void {
        const testCase = new TestCase(target, context);
        Brain.instance()
            .learn(StartedTestCase, new StartedTestCase(testCase));
    }
}

export default new Test().decorator();
