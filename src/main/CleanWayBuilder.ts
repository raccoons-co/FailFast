import EventBus from "./bugeye/EventBus";
import {BugEyeEvent} from "./bugeye/BugEyeEvent";
import Report from "./bugeye/Report";
import AssignedTestClass from "./bugeye/AssignedTestClass";

//@Immutable
export default class CleanWayBuilder  {

    public use(testClass: object) {
        EventBus.instance()
            .subscribe(BugEyeEvent.testClassAssigned, new AssignedTestClass(testClass));
        return this;
    }

    public build() {
        EventBus.instance()
            .subscribe(BugEyeEvent.report, new Report())
            .publish(BugEyeEvent.testCaseStarted)
            .publish(BugEyeEvent.report);
    }
}
