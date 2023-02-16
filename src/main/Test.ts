import Annotation from "./Annotation";
import TestMethodRunner from "./TestMethodRunner";

class Test implements Annotation {

    public execute(){
        return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
            new TestMethodRunner(target, propertyKey, descriptor).run();
        }
    }
}

export default new Test().execute();
