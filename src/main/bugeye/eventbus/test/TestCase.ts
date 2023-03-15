import Immutable from "../../../Immutable";
import Precondition from "../../ethics/Precondition";

@Immutable
export default class TestCase {

    private readonly target: object;
    private readonly propertyKey: string;
    private readonly descriptor: PropertyDescriptor;

    constructor(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        this.target = Precondition.checkNotNull(target);
        this.propertyKey = Precondition.checkNotNull(propertyKey);
        this.descriptor = Precondition.checkNotNull(descriptor);
    }

    public apply() {
        const originalMethod = this.descriptor.value;
        originalMethod.apply(this.target);
    }

    public toString(): string {
        return this.target.constructor.name + "." + this.propertyKey + "()";
    }
}
