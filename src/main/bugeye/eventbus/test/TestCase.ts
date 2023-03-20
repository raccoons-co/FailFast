/* eslint-disable */
import Immutable from "../../../Immutable";
import Method from "./Method";
import Strict from "../../ethics/Strict";

@Immutable
export default class TestCase implements Method {

    private readonly originalMethod: any;
    private readonly context: ClassMethodDecoratorContext;

    constructor(target: any,
                context: ClassMethodDecoratorContext) {
        this.originalMethod = Strict.notNull(target);
        this.context = Strict.notNull(context);
    }

    /**
     * Execute test case method.
     */
    public apply() {
        this.originalMethod.call();
    }

    /**
     * Returns string representation of the test case
     */
    public toString(): string {
        return String(this.context.name) + "()";
    }
}
