
import PubSub from "./pubsub/PubSub";
import {Event} from "./pubsub/Event";
import TestCaseRunner from "./testcase/TestCaseRunner";

export default class CleanWayBuilder  {

    public use(o: object) {
        return this;
    }

    public build() {
        PubSub.instance().publish(Event.TEST, new TestCaseRunner());
    }
}