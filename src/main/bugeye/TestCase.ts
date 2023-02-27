//@Immutable
export default class TestCase {

    private target: object;
    private propertyKey: string;
    private descriptor: PropertyDescriptor;

    constructor(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        this.target = target;
        this.propertyKey = propertyKey;
        this.descriptor = descriptor;
    }

    public method() {
        return this.descriptor.value;
    }

    public toString(): string {
        return this.target.constructor.name + "." + this.propertyKey + "()";
    }
}
