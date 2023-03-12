import Immutable from "../../../Immutable";

@Immutable
export default class FailedTestCaseException extends Error {

    constructor(message?: string) {
        super(message);
    }
}
