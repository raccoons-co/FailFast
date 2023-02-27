import Subscription from "./Subscription";

export default interface Handler {
    accept(subscriber: Subscription): void;
}