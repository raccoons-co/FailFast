export default class FailedTestCaseException extends Error {

    constructor(message?: string) {
        super(message);
    }
}
