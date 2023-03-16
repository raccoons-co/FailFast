import Immutable from "../../../Immutable";
import Method from "./Method";
import Check from "../../ethics/Check";

@Immutable
export default class TestCase implements Method {

    /** See `MethodDecorator` */
    private readonly target: object;
    private readonly propertyKey: string;
    private readonly descriptor: PropertyDescriptor;

    /**
     * Initiates method properties of the test case.
     *
     * @param target object
     * @param propertyKey name of the member
     * @param descriptor for the member
     */
    constructor(target: object,
                propertyKey: string,
                descriptor: PropertyDescriptor) {
        this.target = Check.notNull(target);
        this.propertyKey = Check.notNull(propertyKey);
        this.descriptor = Check.notNull(descriptor);
    }

    /**
     * Execute test case method.
     */
    public apply() {
        const originalMethod = this.descriptor.value;
        originalMethod.apply(this.target);
    }

    /**
     * Returns string representation of the test case
     */
    public toString(): string {
        return this.target.constructor.name + "." + this.propertyKey + "()";
    }
}
