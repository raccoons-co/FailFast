import {Immutable} from "@raccoons-co/ethics";
import TimePointHandler from "./TimePointHandler";
import Finish from "./Finish";

@Immutable
export default class Start implements TimePointHandler {

    /** @inheritDoc */
    timestamp(): number {
        return -performance.now();
    }

    /** @inheritDoc */
    next(): TimePointHandler {
        return new Finish();
    }
}
