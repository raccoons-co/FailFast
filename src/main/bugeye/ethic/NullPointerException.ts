import Immutable from "../../Immutable";

@Immutable
export default class NullPointerException extends Error {

    constructor(message?: string) {
        super(message);
    }
}
