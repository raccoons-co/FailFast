import Annotation from "./Annotation";
import Brain from "./bugeye/eventbus/Brain";
import StartedTestCase from "./bugeye/eventbus/sensor/StartedTestCase";
import {Signal} from "./bugeye/eventbus/Signal";
import TestCase from "./bugeye/TestCase";
import LogRecord from "./bugeye/eventbus/sensor/LogRecord";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {

            const testCase = new TestCase(target, propertyKey as string, descriptor);
            Brain.instance()
                .learn(Signal.LOG, new LogRecord(testCase.toString()))
                .learn(Signal.TEST_CASE_STARTED, new StartedTestCase(testCase));
        }
    }
}

export default new Test().decorator();
