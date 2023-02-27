import Annotation from "./Annotation";
import EventBus from "./bugeye/EventBus";
import TestCaseSubscription from "./bugeye/TestCaseSubscription";
import {Event} from "./bugeye/Event";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            EventBus.instance()
                .subscribe(Event.testRun, new TestCaseSubscription(target, propertyKey, descriptor));
        }
    }
}

export default new Test().decorator();
