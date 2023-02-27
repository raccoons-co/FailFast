import {TestCaseEvent} from "./TestCaseEvent";
import Handler from "./Handler";

export default class EventBus {

    private static singleInstance: EventBus;
    private eventBus: Map<TestCaseEvent, Array<Handler>>;

    private constructor() {
        this.eventBus = new Map<TestCaseEvent, Array<Handler>>();
    }

    public static instance(): EventBus {
        if (!EventBus.singleInstance) {
            EventBus.singleInstance = new EventBus();
        }
        return EventBus.singleInstance;
    }

    public subscribe(event: TestCaseEvent, handler: Handler) {
        this.channel(event).push(handler);
    }

    public publish(event: TestCaseEvent): EventBus {
        if (this.eventBus.has(event)) {
            this.channel(event).forEach((handler) => handler.execute());
        }
        return this;
    }

    private channel(event: TestCaseEvent): Array<Handler>{
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
