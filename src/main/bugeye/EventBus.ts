import {BugEyeEvent} from "./BugEyeEvent";
import Handler from "./Handler";

export default class EventBus {

    private static singleInstance: EventBus;
    private eventBus: Map<BugEyeEvent, Array<Handler>>;

    private constructor() {
        this.eventBus = new Map<BugEyeEvent, Array<Handler>>();
    }

    public static instance(): EventBus {
        if (!EventBus.singleInstance) {
            EventBus.singleInstance = new EventBus();
        }
        return EventBus.singleInstance;
    }

    public subscribe(event: BugEyeEvent, handler: Handler) {
        this.channel(event).push(handler);
        return this;
    }

    public publish(event: BugEyeEvent): EventBus {
        if (this.eventBus.has(event)) {
            this.channel(event).forEach((handler) => {
                handler.execute();
            });
        }
        return this;
    }

    private channel(event: BugEyeEvent): Array<Handler>{
        const channel = this.eventBus.get(event);
        if (channel) {
            return channel;
        } else {
            const newChannel = new Array<Handler>();
            this.eventBus.set(event, newChannel);
            return newChannel;
        }
    }
}
