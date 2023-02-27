import {BugEyeEvent} from "./BugEyeEvent";
import Worker from "./Worker";

//@Immutable
export default class EventBus {

    private static singleInstance: EventBus;
    private events: Map<BugEyeEvent, Array<Worker>>;

    private constructor() {
        this.events = new Map<BugEyeEvent, Array<Worker>>();
    }

    public static instance(): EventBus {
        if (!EventBus.singleInstance) {
            EventBus.singleInstance = new EventBus();
        }
        return EventBus.singleInstance;
    }

    public subscribe(event: BugEyeEvent, worker: Worker) {
        this.channel(event).push(worker);
        return this;
    }

    public publish(event: BugEyeEvent): EventBus {
        if (this.events.has(event)) {
            this.channel(event).forEach((worker) => {
                worker.execute();
            });
        }
        return this;
    }

    private channel(event: BugEyeEvent): Array<Worker> {
        const channel = this.events.get(event);
        if (channel) {
            return channel;
        } else {
            const newChannel = new Array<Worker>();
            this.events.set(event, newChannel);
            return newChannel;
        }
    }
}
