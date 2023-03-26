import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import BrainException from "./BrainException";
import Brain from "../Brain";
import LogRecord from "./LogRecord";

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
