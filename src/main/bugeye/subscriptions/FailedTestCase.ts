import Handler from "../Handler";
import FailedTestCaseException from "./FailedTestCaseException";

export default class FailedTestCase implements Handler {

    private propertyKey: string | symbol;
    private exception: FailedTestCaseException;

    constructor(propertyKey: string | symbol, exception: FailedTestCaseException) {
        this.propertyKey = propertyKey;
        this.exception = exception;
    }

    execute(): void {
        console.log("\x1b[31mfailed\x1b[0m: %s - %s", this.propertyKey, this.exception.message);
    }
}