import Annotation from "./Annotation";
import CleanWayPubSub from "./CleanWayPubSub";
import TestCase from "./TestCase";
import {CleanWayEvent} from "./CleanWayEvent";

class Test implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            CleanWayPubSub.instance()
                .subscribe(CleanWayEvent.TEST, new TestCase(target, propertyKey, descriptor));
        }
    }
}

export default new Test().decorator();
