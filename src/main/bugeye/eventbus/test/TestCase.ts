import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";
import ElapsedTime from "../../elapsedtime/ElapsedTime";

@Immutable
export default class TestCase implements Neuron {

    private readonly originalMethod: Method;
    private readonly context: ClassMethodDecoratorContext;
    private readonly elapsedTime: ElapsedTime;

    constructor(originalMethod: Method,
                context: ClassMethodDecoratorContext) {
        this.originalMethod = Strict.notNull(originalMethod);
        this.context = Strict.notNull(context);
        this.elapsedTime = new ElapsedTime();
    }

    public activate() {
        try {
            this.elapsedTime.addTimepoint();
            this.originalMethod.call(this.originalMethod);
            this.elapsedTime.addTimepoint();

            Brain.instance()
                .learn(PassedTestCase, new PassedTestCase(this))
        } catch (error) {
            this.elapsedTime.addTimepoint();

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
     * Returns duration of the test case execution.
     */
    public duration(): number {
        return this.elapsedTime.value();
    }
}
