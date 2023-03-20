import Immutable from "../../../Immutable";
import Strict from "../../ethics/Strict";
import Method from "../../../type/Method";

@Immutable
export default class TestCase{

    private readonly originalMethod: Method;
    private readonly context: ClassMethodDecoratorContext;

    constructor(target: Method,
                context: ClassMethodDecoratorContext) {
        this.originalMethod = Strict.notNull(target);
        this.context = Strict.notNull(context);
    }

    /**
     * Execute test case method.
     */
    public apply() {
        this.originalMethod.call(this.originalMethod);
    }

    /**
     * Returns string representation of the test case
     */
    public toString(): string {
        return String(this.context.name) + "()";
    }
}
