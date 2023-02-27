export default class TestCase {

    private target: object;
    private propertyKey: string | symbol;
    private descriptor: PropertyDescriptor;

    constructor(target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        this.target = target;
        this.propertyKey = propertyKey;
        this.descriptor = descriptor;
    }

    public method() {
        return this.descriptor.value;
    }

    public toString(): string {
        return this.target.constructor.name + "." + (this.propertyKey as string);
    }
}