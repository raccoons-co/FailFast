import Handler from "../Handler";
import EventBus from "../EventBus";
import {BugEyeEvent} from "../BugEyeEvent";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";
import TestCase from "../TestCase";

export default class StartedTestCase implements Handler {

    private testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = testCase;
    }

    public execute() {
        try {
            this.testCase.method().apply();
            EventBus.instance()
                .subscribe(BugEyeEvent.testCasePassed, new PassedTestCase(this.testCase));
        } catch (e) {
            EventBus.instance()
                .subscribe(BugEyeEvent.testCaseFailed,
                    new FailedTestCase(this.testCase, e as FailedTestCaseException));
        }
    }
}
