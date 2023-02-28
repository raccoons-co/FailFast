import Brain from "./bugeye/eventbus/Brain";
import {Signal} from "./bugeye/eventbus/Signal";
import BugEyeReport from "./bugeye/eventbus/sensor/BugEyeReport";

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
        return this;
    }

    public build() {
        Brain.instance()
            .learn(Signal.REPORT, new BugEyeReport())
            .recognize(Signal.TEST_CASE_STARTED)
            .recognize(Signal.REPORT);
    }
}
