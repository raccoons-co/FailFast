import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";

@Immutable
export default class LogRecord implements Neuron {

    private readonly date: Date;
    private readonly record: string[];

    constructor(...args: string[]) {
        this.date = new Date();
        this.record = Strict.notNull(args);
    }

    public activate(): void {
        console.log(this.date, this.record);
    }
}
