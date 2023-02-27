import Handler from "../Handler";
import {BugEyeEvent} from "../BugEyeEvent";
import EventBus from "../EventBus";

export default class Report implements Handler {
    execute(): void {
        EventBus.instance()
            .publish(BugEyeEvent.testClassAssigned)
            .publish(BugEyeEvent.testCasePassed)
            .publish(BugEyeEvent.testCaseFailed);
    }
}
