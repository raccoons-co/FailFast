import Annotation from "./Annotation";
import Brain from "./bugeye/eventbus/Brain";
import {Signal} from "./bugeye/eventbus/Signal";
import LogRecord from "./bugeye/eventbus/sensor/LogRecord";
import TestCase from "./bugeye/TestCase";
import StartedTestCase from "./bugeye/eventbus/sensor/StartedTestCase";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        Brain.instance()
            .learn(Signal.LOG, new LogRecord(this.constructor.name));
        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {

            const testCase = new TestCase(target, propertyKey as string, descriptor);
            Brain.instance()
                .learn(Signal.LOG, new LogRecord(testCase.toString()))
                .learn(Signal.TEST_CASE_STARTED, new StartedTestCase(testCase));
        }
    }
}

export default new Test().decorator();
