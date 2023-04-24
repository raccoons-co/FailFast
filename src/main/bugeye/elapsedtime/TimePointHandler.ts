export default interface TimePointHandler {

    /** Returns the time point timestamp of measured event. */
    timestamp(): number;

    /** Returns the next time point handler. */
    next(): TimePointHandler;
}
