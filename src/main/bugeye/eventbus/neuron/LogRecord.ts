import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";

@Immutable
export default class LogRecord implements Neuron {

    private readonly record: Array<string>;

    private constructor(record: Array<string>) {
        this.record = Strict.notNull(record);
    }

    public activate(): void {
        console.log(this.record.toString());
    }

    public static newBuilder(): LogRecordBuilder {
        return new @Immutable class implements LogRecordBuilder {

            private readonly record = new Array<string>();

            public addField(value: string): this {
                Strict.notNull(value);
                this.record.push(value);
                return this;
            }

            public build(): LogRecord {
                return new LogRecord(this.record);
            }
        };
    }
}

/**  Defines interface for inner anonymous class of `LogRecord`. */
interface LogRecordBuilder {

    addField(value: string): LogRecordBuilder;

    build(): LogRecord;
}
