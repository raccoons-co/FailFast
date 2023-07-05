import {Immutable, Strict} from "@raccoons-co/ethics";
import LogRecord from "./LogRecord";

@Immutable
export default class LogRecordBuilder {

    private readonly record = new Array<string>();

    public addField(value: string): this {
        Strict.notNull(value);
        this.record.push(value);
        return this;
    }

    public build(): LogRecord {
        return new LogRecord(this.record);
    }
}
