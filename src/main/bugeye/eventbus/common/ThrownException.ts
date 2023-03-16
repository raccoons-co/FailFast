import Neuron from "../Neuron";
import BrainException from "./BrainException";
import Brain from "../Brain";
import LogRecord from "./LogRecord";
import Log from "../../../Log";
import Immutable from "../../../Immutable";
import Check from "../../ethics/Check";

@Immutable
export default class ThrownException implements Neuron {

    private readonly exception: Error;

    constructor(exception: Error) {
        this.exception = Check.notNull(exception);
    }

    @Log
    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.exception.stack as string));
        throw new BrainException(this.exception.stack);
    }
}
