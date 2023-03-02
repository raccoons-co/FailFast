import Annotation from "./Annotation";
import Brain from "./bugeye/eventbus/Brain";
import LogRecord from "./bugeye/eventbus/testcase/LogRecord";
import TestCase from "./bugeye/eventbus/testcase/TestCase";
import StartedTestCase from "./bugeye/eventbus/testcase/StartedTestCase";
import TestReport from "./bugeye/eventbus/testcase/TestReport";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {

        Brain.instance()
            .learn(LogRecord.name, new LogRecord(this.constructor.name))
            .learn(TestReport.name, new TestReport());

        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            const testCase = new TestCase(target, propertyKey as string, descriptor);
            Brain.instance()
                .learn(LogRecord.name, new LogRecord(testCase.toString()))
                .learn(StartedTestCase.name, new StartedTestCase(testCase));
        }
    }
}

export default new Test().decorator();
