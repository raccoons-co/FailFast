import {Immutable, Strict} from "@raccoons-co/ethics";
import {Any} from "@raccoons-co/genera";

@Immutable
export default class RecognitionPayload {

    private readonly value: Any;

    constructor(value: Any) {
        this.value = Strict.notNull(value);
    }

    public valueOf(): Any {
        return this.value;
    }
}
