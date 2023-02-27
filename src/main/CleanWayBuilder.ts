import EventBus from "./bugeye/EventBus";
import {BugEyeEvent} from "./bugeye/BugEyeEvent";
import Report from "./bugeye/Report";
import Assigned from "./bugeye/Assigned";

//@Immutable
export default class CleanWayBuilder  {

    public assign(testClass: object) {
        EventBus.instance()
            .subscribe(BugEyeEvent.testClassAssigned, new Assigned(testClass));
        return this;
    }

    public build() {
        EventBus.instance()
            .subscribe(BugEyeEvent.report, new Report())
            .publish(BugEyeEvent.testCaseStarted)
            .publish(BugEyeEvent.report);
    }
}
