import Neuron from "../Neuron";
import BrainException from "./BrainException";
import Brain from "../Brain";
import LogRecord from "./LogRecord";
import Immutable from "../../../Immutable";
import {Strict} from "@raccoons-co/ethics";

@Immutable
export default class ThrownException implements Neuron {

    private readonly exception: Error;

    constructor(exception: Error) {
        this.exception = Strict.notNull(exception);
    }

    public activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.exception.stack as string));
        throw new BrainException(this.exception.stack);
    }
}
