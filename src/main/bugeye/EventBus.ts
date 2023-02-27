import {Event} from "./Event";
import Handler from "./Handler";
import Subscription from "./Subscription";

export default class EventBus {

    private static singleInstance: EventBus;
    private eventQueue: Map<Event, Array<Subscription>>;


    private constructor() {
        this.eventQueue = new Map<Event, Array<Subscription>>();

    }

    public static instance(): EventBus {
        if (!EventBus.singleInstance) {
            EventBus.singleInstance = new EventBus();
        }
        return EventBus.singleInstance;
    }

    public subscribe(event: Event, subscription: Subscription) {

        if (!this.eventQueue.has(event)) {
            this.eventQueue.set(event, new Array<Subscription>());
        }
        const channel = this.eventQueue.get(event);
        if (channel) {
            channel.push(subscription);
        }
    }

    public publish(event: Event, handler: Handler) {

        if (this.eventQueue.has(event)) {
            const channel = this.eventQueue.get(event);
            if (channel) {
                channel.forEach((subscription) => handler.accept(subscription));
            }
        }
    }
}
