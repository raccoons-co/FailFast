import EventBus from "./bugeye/EventBus";
import {TestCaseEvent} from "./bugeye/TestCaseEvent";

export default class CleanWayBuilder  {

    public use(o: object) {
        return this;
    }

    public build() {
        EventBus.instance()
            .publish(TestCaseEvent.start)
            .publish(TestCaseEvent.passed)
            .publish(TestCaseEvent.failed);
    }
}
