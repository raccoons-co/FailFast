import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "./LogRecord";
import BrainException from "./BrainException";
import Log from "../../../Log";

//@Immutable
export default class ThrownException implements Neuron {

    private readonly exception: Error;

    constructor(exception: Error) {
        this.exception = exception;
    }

    @Log
    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.exception.message));
        throw new BrainException(this.exception.message);
    }
}
