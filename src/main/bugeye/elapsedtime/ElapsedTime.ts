import {Immutable} from "@raccoons-co/ethics";
import TimePointHandler from "./TimePointHandler";
import Start from "./Start";

@Immutable
export default class ElapsedTime {

    private readonly timestamps: Array<number>;
    private readonly timePointHandlers: Array<TimePointHandler>;

    constructor() {
        this.timestamps = new Array<number>();
        this.timePointHandlers = new Array<TimePointHandler>();
        this.init();
    }

    private init(): void {
        this.timePointHandlers.push(new Start());
    }

    /** Handles adding a time point of measured event. */
    public addTimepoint(): void {
        const timePointHandler = this.timePointHandlers.pop();
        if (timePointHandler) {
            this.timestamps.push(timePointHandler.timestamp());
            this.timePointHandlers.push(timePointHandler.next())
        }
    }

    /** Returns the number of milliseconds that passes from the start of an event to its finish. */
    public value(): number {
        return this.timestamps.reduce((a, b) => a + b, 0);
    }
}
