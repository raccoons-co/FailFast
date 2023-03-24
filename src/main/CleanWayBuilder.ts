import Immutable from "./Immutable";
import Brain from "./bugeye/eventbus/Brain";
import StartedTestCase from "./bugeye/eventbus/test/StartedTestCase";
import FailedTestCase from "./bugeye/eventbus/test/FailedTestCase";
import TestSummary from "./bugeye/eventbus/test/TestSummary";
import LogRecord from "./bugeye/eventbus/common/LogRecord";
import ThrownException from "./bugeye/eventbus/common/ThrownException";
import {Strict} from "@raccoons-co/ethics";
import PassedTestCase from "./bugeye/eventbus/test/PassedTestCase";

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

    public assign(testClass: object): CleanWayBuilder {
        Strict.notNull(testClass);
        return this;
    }

    public build() {
        Brain.instance()
            .learn(TestSummary, new TestSummary())
            .recognize(StartedTestCase)
            .recognize(PassedTestCase)
            .recognize(FailedTestCase)
            .recognize(TestSummary)
            .recognize(LogRecord)
            .recognize(ThrownException);
    }
}
