import Annotation from "./Annotation";
import EventBus from "./bugeye/EventBus";
import TestCase from "./bugeye/subscriptions/TestCase";
import {TestCaseEvent} from "./bugeye/TestCaseEvent";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            EventBus.instance()
                .subscribe(TestCaseEvent.start, new TestCase(target, propertyKey, descriptor));
        }
    }
}

export default new Test().decorator();
