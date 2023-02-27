import Annotation from "./Annotation";
import EventBus from "./bugeye/EventBus";
import StartedTestCase from "./bugeye/StartedTestCase";
import {BugEyeEvent} from "./bugeye/BugEyeEvent";
import TestCase from "./bugeye/TestCase";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {

            const testCase = new TestCase(target, propertyKey as string, descriptor);
            EventBus.instance()
                .subscribe(BugEyeEvent.testCaseStarted, new StartedTestCase(testCase));
        }
    }
}

export default new Test().decorator();
