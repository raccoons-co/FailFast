import {CleanWayEvent} from "./CleanWayEvent";
import CleanWayHandler from "./CleanWayHandler";
import CleanWaySubscriber from "./CleanWaySubscriber";

export default class CleanWayPubSub {

    private static singleInstance: CleanWayPubSub;
    private _events: Map<CleanWayEvent, Array<CleanWaySubscriber>>;


    private constructor() {
        this._events = new Map<CleanWayEvent, Array<CleanWaySubscriber>>();

    }

    public static instance(): CleanWayPubSub {
        if (!CleanWayPubSub.singleInstance) {
            CleanWayPubSub.singleInstance = new CleanWayPubSub();
        }
        return CleanWayPubSub.singleInstance;
    }

    public subscribe(event: CleanWayEvent, subscriber: CleanWaySubscriber) {

        if (!this._events.has(event)) {
            this._events.set(event, new Array<CleanWaySubscriber>());
        }
        const channel = this._events.get(event);
        if (channel) {
            channel.push(subscriber);
        }
    }

    public publish(event: CleanWayEvent, handler: CleanWayHandler) {

        if (this._events.has(event)) {
            const channel = this._events.get(event);
            if (channel) {
                channel.forEach((subscriber) => handler.accept(subscriber));
            }
        }
    }
}
