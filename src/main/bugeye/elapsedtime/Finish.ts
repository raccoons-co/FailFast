import {Immutable} from "@raccoons-co/ethics";
import TimePointHandler from "./TimePointHandler";
import Start from "./Start";

@Immutable
export default class Finish implements TimePointHandler {

    /** @inheritDoc */
    timestamp(): number {
        return performance.now();
    }

    /** @inheritDoc */
    next(): TimePointHandler {
        return new Start();
    }
}
