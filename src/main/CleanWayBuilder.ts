import Brain from "./bugeye/eventbus/Brain";
import TestReport from "./bugeye/eventbus/testcase/TestReport";
import LogRecord from "./bugeye/eventbus/common/LogRecord";

//@Immutable
export default class CleanWayBuilder {

    private static singleInstance: CleanWayBuilder;

    public static instance(): CleanWayBuilder {
        if (!CleanWayBuilder.singleInstance) {
            CleanWayBuilder.singleInstance = new CleanWayBuilder();
        }
        return CleanWayBuilder.singleInstance;
    }

    public assign(testClass: object): CleanWayBuilder {
        Brain.instance()
            .learn(LogRecord, new LogRecord(testClass.constructor.name));
        return this;
    }

    public build() {
        Brain.instance()
            .recognize(TestReport);
    }
}
