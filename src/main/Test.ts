import Annotation from "./Annotation";
import TestCasesInventory from "./TestCasesInventory";

class Test implements Annotation {

    public execute() {
        return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
            const method = descriptor.value;
            TestCasesInventory.instance().keep(method);
            method.apply();
        }
    }
}

export default new Test().execute();
