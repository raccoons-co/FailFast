//@Immutable
export default class TestCase {

    private readonly target: object;
    private readonly propertyKey: string;
    private readonly descriptor: PropertyDescriptor;

    constructor(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        this.target = target;
        this.propertyKey = propertyKey;
        this.descriptor = descriptor;
    }

    public method() {
        return this.descriptor.value;
    }

    public object(): object {
        return this.target;
    }

    public toString(): string {
        return this.target.constructor.name + "." + this.propertyKey + "()";
    }
}
