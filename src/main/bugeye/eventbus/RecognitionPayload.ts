import {Any} from "@raccoons-co/genera";

export default class RecognitionPayload {

    private readonly value: Any;

    constructor(value: Any) {
        this.value = value;
    }

    public valueOf(): Any {
        return this.value;
    }
}
