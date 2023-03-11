import Immutable from "../../../Immutable";

@Immutable
export default class BrainException extends Error {

    constructor(message?: string) {
        super(message);
    }
}
