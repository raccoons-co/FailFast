import {Event} from "./Event";
import Handler from "./Handler";
import Subscription from "./Subscription";

export default class PubSub {

    private static singleInstance: PubSub;
    private _events: Map<Event, Array<Subscription>>;


    private constructor() {
        this._events = new Map<Event, Array<Subscription>>();

    }

    public static instance(): PubSub {
        if (!PubSub.singleInstance) {
            PubSub.singleInstance = new PubSub();
        }
        return PubSub.singleInstance;
    }

    public subscribe(event: Event, subscriber: Subscription) {

        if (!this._events.has(event)) {
            this._events.set(event, new Array<Subscription>());
        }
        const channel = this._events.get(event);
        if (channel) {
            channel.push(subscriber);
        }
    }

    public publish(event: Event, handler: Handler) {

        if (this._events.has(event)) {
            const channel = this._events.get(event);
            if (channel) {
                channel.forEach((subscriber) => handler.accept(subscriber));
            }
        }
    }
}
