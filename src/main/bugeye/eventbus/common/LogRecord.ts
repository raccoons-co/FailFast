import Neuron from "../Neuron";

//@Immutable
export default class LogRecord implements Neuron {

    private readonly date: Date;
    private readonly record: string[];

    constructor(...args: string[]) {
        this.date = new Date();
        this.record = args;
    }

    activate(): void {
        console.log(this.date, this.record);
    }
}
