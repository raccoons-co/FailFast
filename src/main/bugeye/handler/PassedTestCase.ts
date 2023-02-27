import Handler from "../Handler";
import TestCase from "../TestCase";
import {TestCaseState} from "../TestCaseState";

export default class PassedTestCase implements Handler {

    private testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = testCase;
    }

    execute(): void {
        console.log( "%s: %s", TestCaseState.passed, this.testCase);

    }
}