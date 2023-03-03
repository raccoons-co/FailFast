import Annotation from "./Annotation";
import Brain from "./bugeye/eventbus/Brain";
import TestCase from "./bugeye/eventbus/test/TestCase";
import StartedTestCase from "./bugeye/eventbus/test/StartedTestCase";
import TestReport from "./bugeye/eventbus/test/TestReport";
import LogRecord from "./bugeye/eventbus/common/LogRecord";
import Log from "./Log";

class Test implements Annotation<MethodDecorator> {

    @Log
    public decorator(): MethodDecorator {

        Brain.instance().learn(TestReport, new TestReport());

        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            const testCase = new TestCase(target, propertyKey as string, descriptor);
            Brain.instance()
                .learn(LogRecord, new LogRecord(testCase.toString()))
                .learn(StartedTestCase, new StartedTestCase(testCase));
        }
    }
}

export default new Test().decorator();
