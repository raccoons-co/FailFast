import CleanWaySubscriber from "./CleanWaySubscriber";

export default interface CleanWayHandler {
    accept(subscriber: CleanWaySubscriber): void;
}