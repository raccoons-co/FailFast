import {Immutable} from "@raccoons-co/ethics";

@Immutable
export default class DurationBuilder {

    private readonly timestamps = new Array<number>();

    /**
     * Adds the measurement start time point.
     */
    public start(): DurationBuilder {
        this.timestamps.push(-performance.now());
        return this;
    }

    /**
     * Adds the measurement finish time point.
     */
    public finish(): DurationBuilder {
        this.timestamps.push(performance.now());
        return this;
    }

    /**
     * Returns the number of milliseconds that elapsed during function execution.
     */
    public build(): number {
        return this.timestamps.reduce((a, b) => a + b, 0);
    }
}
