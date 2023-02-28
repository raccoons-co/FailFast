import SensorNeuron from "../SensorNeuron";

//@Immutable
export default class LogRecord implements SensorNeuron {

    private readonly record: string[];
    private readonly date: Date;

    constructor(...args: string[]) {
        this.record = args;
        this.date = new Date();
    }

    activate(): void {
        console.log(this.date, this.record);
    }
}
