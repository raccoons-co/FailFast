import Annotation from "./Annotation";
import Brain from "./bugeye/eventbus/Brain";
import TestCase from "./bugeye/eventbus/test/TestCase";
import StartedTestCase from "./bugeye/eventbus/test/StartedTestCase";
import Immutable from "./Immutable";

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
