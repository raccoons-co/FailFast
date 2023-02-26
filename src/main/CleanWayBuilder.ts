
import CleanWayPubSub from "./CleanWayPubSub";
import {CleanWayEvent} from "./CleanWayEvent";
import TestRunner from "./TestRunner";

export default class CleanWayBuilder  {

    public use(o: object) {
        return this;
    }

    public build() {
        CleanWayPubSub.instance().publish(CleanWayEvent.TEST, new TestRunner());
    }
}