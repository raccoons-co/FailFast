import Annotation from "./Annotation";

class Test implements Annotation {
    public runMethod(){
        return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
            const method = descriptor.value;
            method.apply();
        }
    }
}

export default new Test().runMethod();
