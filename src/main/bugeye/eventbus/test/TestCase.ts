import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";
import DurationBuilder from "./DurationBuilder";

@Immutable
export default class TestCase implements Neuron {

    private readonly originalMethod: Method;
    private readonly context: ClassMethodDecoratorContext;
    private readonly durationBuilder: DurationBuilder;

    constructor(originalMethod: Method,
                context: ClassMethodDecoratorContext) {
        this.originalMethod = Strict.notNull(originalMethod);
        this.context = Strict.notNull(context);
        this.durationBuilder = new DurationBuilder();
    }

    public activate() {
        try {
            this.durationBuilder.start();

            this.originalMethod.call(this.originalMethod);
            this.durationBuilder.finish();

            Brain.instance()
                .learn(PassedTestCase, new PassedTestCase(this))
        } catch (error) {
            this.durationBuilder.finish();

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
        return this.durationBuilder.build();
    }
}
