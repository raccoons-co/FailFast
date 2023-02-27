import EventBus from "./bugeye/EventBus";
import TestCaseHandler from "./bugeye/TestCaseHandler";
import {Event} from "./bugeye/Event";

export default class CleanWayBuilder  {

    public use(o: object) {
        return this;
    }

    public build() {
        EventBus.instance().publish(Event.testRun, new TestCaseHandler());
    }
}