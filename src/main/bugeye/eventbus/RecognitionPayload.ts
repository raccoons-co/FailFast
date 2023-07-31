import {Immutable, Strict} from "@raccoons-co/ethics";
import {Any} from "@raccoons-co/genera";

@Immutable
export default class RecognitionPayload {

    private readonly payloadValue: Any;

    constructor(value: Any) {
        this.payloadValue = Strict.notNull(value);
    }

    public value(): Any {
        return this.payloadValue;
    }
}
