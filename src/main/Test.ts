import Annotation from "./Annotation";
import Brain from "./bugeye/eventbus/Brain";
import TestCaseSignal from "./bugeye/eventbus/testcase/TestCaseSignal";
import LogRecord from "./bugeye/eventbus/testcase/LogRecord";
import TestCase from "./bugeye/eventbus/testcase/TestCase";
import StartedTestCase from "./bugeye/eventbus/testcase/StartedTestCase";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        Brain.instance()
            .learn(TestCaseSignal.LOG, new LogRecord(this.constructor.name));
        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {

            const testCase = new TestCase(target, propertyKey as string, descriptor);
            Brain.instance()
                .learn(TestCaseSignal.LOG, new LogRecord(testCase.toString()))
                .learn(TestCaseSignal.STARTED, new StartedTestCase(testCase));
        }
    }
}

export default new Test().decorator();
