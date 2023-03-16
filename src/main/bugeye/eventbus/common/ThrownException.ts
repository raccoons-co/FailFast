import Neuron from "../Neuron";
import BrainException from "./BrainException";
import Brain from "../Brain";
import LogRecord from "./LogRecord";
import Log from "../../../Log";
import Immutable from "../../../Immutable";
import Precondition from "../../ethics/Precondition";

@Immutable
export default class ThrownException implements Neuron {

    private readonly exception: Error;

    constructor(exception: Error) {
        this.exception = Precondition.checkNotNull(exception);
    }

    @Log
    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.exception.stack));
        throw new BrainException(this.exception.stack);
    }
}
