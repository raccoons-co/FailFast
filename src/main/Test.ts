import Annotation from "./Annotation";
import TestsInventory from "./TestsInventory";

class Test implements Annotation {

    public execute() {
        return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
            const method = descriptor.value;
            TestsInventory.instance().methods().push(method);
            method.apply();
        }
    }
}

export default new Test().execute();
