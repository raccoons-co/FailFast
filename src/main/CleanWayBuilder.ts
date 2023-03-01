import Brain from "./bugeye/eventbus/Brain";
import {Signal} from "./bugeye/eventbus/Signal";
import LogRecord from "./bugeye/eventbus/sensor/LogRecord";
import BugeyeReport from "./bugeye/eventbus/sensor/BugeyeReport";

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
            .learn(Signal.LOG, new LogRecord(testClass.constructor.name));
        return this;
    }

    public build() {
        Brain.instance()
            .learn(Signal.BUGEYE_REPORT, new BugeyeReport())
            .recognize(Signal.TEST_CASE_STARTED)
            .recognize(Signal.BUGEYE_REPORT)
            .recognize(Signal.DIAGNOSE);

    }
}
