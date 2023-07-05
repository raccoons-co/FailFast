import {Immutable} from "@raccoons-co/ethics";

@Immutable
export default class BrainException extends Error {

    constructor(message?: string) {
        super(message);
    }
}
