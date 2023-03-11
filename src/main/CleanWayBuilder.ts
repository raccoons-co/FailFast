import Brain from "./bugeye/eventbus/Brain";
import LogRecord from "./bugeye/eventbus/common/LogRecord";
import ThrownException from "./bugeye/eventbus/common/ThrownException";
import StartedTestCase from "./bugeye/eventbus/test/StartedTestCase";
import FailedTestCase from "./bugeye/eventbus/test/FailedTestCase";
import TestSummary from "./bugeye/eventbus/test/TestSummary";
import Immutable from "./Immutable";

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

    //eslint-disable-next-line  @typescript-eslint/no-unused-vars
    public assign(testClass: object): CleanWayBuilder {
        return this;
    }

    public build() {
        Brain.instance()
            .learn(TestSummary, new TestSummary())
            .recognize(StartedTestCase)
            .recognize(FailedTestCase)
            .recognize(TestSummary)
            .recognize(LogRecord)
            .recognize(ThrownException);

    }
}
