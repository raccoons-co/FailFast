import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";

@Immutable
export default class LogRecord implements Neuron {

    private readonly record: Array<string>;

    constructor(record: Array<string>) {
        this.record = Strict.notNull(record);
    }

    public activate(): void {
        console.log(this.record);
    }
}
