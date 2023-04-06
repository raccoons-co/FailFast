import {Immutable} from "@raccoons-co/ethics";

@Immutable
export default class Stopwatch {

    private readonly timestamps = new Array<number>();

    /**
     * Adds the measurement start time point.
     */
    public start() {
        this.timestamps.push(-performance.now());
    }

    /**
     * Adds the measurement finish time point.
     */
    public stop() {
        this.timestamps.push(performance.now());
    }

    /**
     * Returns the number of milliseconds that elapsed during function execution.
     */
    public elapsedTime(): number {
        return this.timestamps.reduce((a, b) => a + b, 0);
    }
}
