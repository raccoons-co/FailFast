import Annotation from "./Annotation";
import PubSub from "./pubsub/PubSub";
import TestCase from "./testcase/TestCase";
import {Event} from "./pubsub/Event";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            PubSub.instance()
                .subscribe(Event.TEST, new TestCase(target, propertyKey, descriptor));
        }
    }
}

export default new Test().decorator();
