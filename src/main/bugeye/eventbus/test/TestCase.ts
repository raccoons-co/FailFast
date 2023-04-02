import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";

@Immutable
export default class TestCase implements Neuron {

    private readonly originalMethod: Method;
    private readonly context: ClassMethodDecoratorContext;
    private readonly timestamps: Array<number>;


    constructor(originalMethod: Method,
                context: ClassMethodDecoratorContext) {
        this.originalMethod = Strict.notNull(originalMethod);
        this.context = Strict.notNull(context);
        this.timestamps = new Array<number>;
    }

    public activate() {
        try {
            this.timestamps.push(-performance.now());
            this.originalMethod.call(this.originalMethod);
            this.timestamps.push(performance.now());

            Brain.instance()
                .learn(PassedTestCase, new PassedTestCase(this))
        } catch (error) {
            this.timestamps.push(performance.now());

            Brain.instance()
                .learn(FailedTestCase, new FailedTestCase(this, error as FailedTestCaseException));
        }
    }

    /**
     * Returns string representation of the test case.
     */
    public toString(): string {
        return String(this.context.name) + "()";
    }


    /**
     * Returns the number of milliseconds elapsed during the test case execution.
     */
    public duration(): number {
        return this.timestamps.reduce((a, b) => a + b, 0);
    }
}
