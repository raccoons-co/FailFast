import Neuron from "../Neuron";
import BrainException from "./BrainException";
import Brain from "../Brain";
import LogRecord from "./LogRecord";

//@Immutable
export default class ThrownException implements Neuron {

    private readonly exception: Error;

    constructor(exception: Error) {
        this.exception = exception;
    }

    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.constructor.name, this.exception.message));
        throw new BrainException(this.exception.message);
    }
}
