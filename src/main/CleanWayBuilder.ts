import Brain from "./bugeye/eventbus/Brain";
import TestReport from "./bugeye/eventbus/test/TestReport";
import LogRecord from "./bugeye/eventbus/common/LogRecord";
import ThrownException from "./bugeye/eventbus/common/ThrownException";
import Log from "./Log";

//@Immutable
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

    @Log
    public assign(testClass: object): CleanWayBuilder {
        Brain.instance()
            .learn(LogRecord, new LogRecord(testClass.constructor.name));
        return this;
    }

    @Log
    public build() {
        Brain.instance()
            .recognize(TestReport)
            .recognize(LogRecord)
            .recognize(ThrownException);
    }
}
