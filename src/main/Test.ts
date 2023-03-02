import Annotation from "./Annotation";
import Brain from "./bugeye/eventbus/Brain";
import LogRecord from "./bugeye/eventbus/common/LogRecord";
import TestCase from "./bugeye/eventbus/testcase/TestCase";
import StartedTestCase from "./bugeye/eventbus/testcase/StartedTestCase";
import TestReport from "./bugeye/eventbus/testcase/TestReport";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {

        Brain.instance()
            .learn(LogRecord, new LogRecord(this.constructor.name))
            .learn(TestReport, new TestReport());

        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            const testCase = new TestCase(target, propertyKey as string, descriptor);
            Brain.instance()
                .learn(LogRecord, new LogRecord(testCase.toString()))
                .learn(StartedTestCase, new StartedTestCase(testCase));
        }
    }
}

export default new Test().decorator();
