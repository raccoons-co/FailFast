import Annotation from "./Annotation";

class FailFast implements Annotation {
    public methodRunDecorator() {
        return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {

            const childFunction = descriptor.value;
            childFunction.apply();
        }
    }
}

export default new FailFast().methodRunDecorator();
