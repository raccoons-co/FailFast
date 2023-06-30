import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";

@Immutable
export default class FailedTestCase implements Neuron {

    private readonly logRecord: LogRecord;

    constructor(logRecord: LogRecord) {
        this.logRecord = Strict.notNull(logRecord);
    }

    public activate(): void {
        Brain.instance()
            .learn(LogRecord, this.logRecord);
    }
}
