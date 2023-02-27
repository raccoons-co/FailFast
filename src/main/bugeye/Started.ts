import Worker from "./Worker";
import EventBus from "./EventBus";
import {BugEyeEvent} from "./BugEyeEvent";
import Passed from "./Passed";
import Failed from "./Failed";
import FailedTestCaseException from "./FailedTestCaseException";
import TestCase from "./TestCase";

//@Immutable
export default class Started implements Worker {

    private testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = testCase;
    }

    public execute() {
        try {
            this.testCase.method()
                .apply(this.testCase.object());
            EventBus.instance()
                .subscribe(BugEyeEvent.testCasePassed, new Passed(this.testCase));
        } catch (e) {
            EventBus.instance()
                .subscribe(BugEyeEvent.testCaseFailed,
                    new Failed(this.testCase, e as FailedTestCaseException));
        }
    }
}
