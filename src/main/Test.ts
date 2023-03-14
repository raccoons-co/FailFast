import Annotation from "./Annotation";
import Immutable from "./Immutable";
import TestCase from "./bugeye/eventbus/test/TestCase";
import Brain from "./bugeye/eventbus/Brain";
import StartedTestCase from "./bugeye/eventbus/test/StartedTestCase";

@Immutable
class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        return this.learnStartedTestCase;
    }

    private learnStartedTestCase(target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const testCase = new TestCase(target, propertyKey as string, descriptor);
        Brain.instance()
            .learn(StartedTestCase, new StartedTestCase(testCase));
    }
}

export default new Test().decorator();
