import Brain from "./bugeye/eventbus/Brain";
import TestCaseSignal from "./bugeye/eventbus/testcase/TestCaseSignal";
import BugeyeReport from "./bugeye/eventbus/testcase/BugeyeReport";
import LogRecord from "./bugeye/eventbus/testcase/LogRecord";

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
            .learn(TestCaseSignal.LOG, new LogRecord(testClass.constructor.name));
        return this;
    }

    public build() {
        Brain.instance()
            .learn(TestCaseSignal.REPORT, new BugeyeReport())
            .recognize(TestCaseSignal.STARTED)
            .recognize(TestCaseSignal.REPORT);
    }
}
