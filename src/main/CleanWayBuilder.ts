import {Immutable, Strict} from "@raccoons-co/ethics";
import {Class} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import FailedTestCase from "./bugeye/eventbus/neuron/FailedTestCase";
import TestSummary from "./bugeye/eventbus/neuron/TestSummary";
import LogRecord from "./bugeye/eventbus/neuron/LogRecord";
import ThrownException from "./bugeye/eventbus/neuron/ThrownException";
import PassedTestCase from "./bugeye/eventbus/neuron/PassedTestCase";

/**
 * Handles test classes with test methods.
 *
 * @public
 */
@Immutable
export default class CleanWayBuilder {

    private static singleInstance: CleanWayBuilder;

    private constructor() {
        // Intentionally empty.
    }

    public static instance(): CleanWayBuilder {
        if (!CleanWayBuilder.singleInstance) {
            CleanWayBuilder.singleInstance = new CleanWayBuilder();
        }
        return CleanWayBuilder.singleInstance;
    }

    /** Use imported class with test cases. */
    public use(testClass: Class): this {
        Strict.notNull(testClass);
        return this;
    }

    public build() {
        Brain.instance()
            .learn(TestSummary, new TestSummary())
            .recognize(PassedTestCase)
            .recognize(FailedTestCase)
            .recognize(TestSummary)
            .recognize(LogRecord)
            .recognize(ThrownException);
    }
}
