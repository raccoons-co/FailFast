import Worker from "./Worker";
import {BugEyeEvent} from "./BugEyeEvent";
import EventBus from "./EventBus";

//@Immutable
export default class Report implements Worker {

    execute(): void {
        EventBus.instance()
            .publish(BugEyeEvent.testClassAssigned)
            .publish(BugEyeEvent.testCasePassed)
            .publish(BugEyeEvent.testCaseFailed);
    }
}
