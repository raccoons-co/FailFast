import Neuron from "../Neuron";
import Immutable from "../../../Immutable";
import Check from "../../ethics/Check";

@Immutable
export default class LogRecord implements Neuron {

    private readonly date: Date;
    private readonly record: string[];

    constructor(...args: string[]) {
        this.date = new Date();
        this.record = Check.notNull(args);
    }

    activate(): void {
        console.log(this.date, this.record);
    }
}
