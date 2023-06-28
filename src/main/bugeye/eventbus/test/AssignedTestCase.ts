import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import Brain from "../Brain";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";
import Stopwatch from "../../../util/Stopwatch";

@Immutable
export default class AssignedTestCase implements Neuron {

    private readonly method: Method;
    private readonly methodContext: ClassMethodDecoratorContext;
    private readonly stopwatch: Stopwatch;

    constructor(method: Method,
                methodContext: ClassMethodDecoratorContext) {
        this.method = Strict.notNull(method);
        this.methodContext = Strict.notNull(methodContext);
        this.stopwatch = new Stopwatch();
    }

    public activate(testClassInstance: object) {
        try {
            Strict.notNull(testClassInstance);

            this.stopwatch.start();
            this.method.call(testClassInstance);
            this.stopwatch.stop();

            Brain.instance()
                .learn(PassedTestCase, new PassedTestCase(this))
        } catch (error) {
            this.stopwatch.stop();

            Brain.instance()
                .learn(FailedTestCase, new FailedTestCase(this, error as FailedTestCaseException));
        }
    }

    /**
     * Returns string representation of the test case.
     */
    public toString(): string {
        return String(this.methodContext.name) + "()";
    }

    /**
     * Returns duration of the test case execution.
     */
    public duration(): number {
        return this.stopwatch.elapsedTime();
    }
}
