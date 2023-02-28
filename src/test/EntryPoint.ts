import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";
import BugeyeTest from "./BugeyeTest";
import NegativeDiagnoseException from "../main/bugeye/eventbus/sensor/NegativeDiagnoseException";
import Brain from "../main/bugeye/eventbus/Brain";
import {Signal} from "../main/bugeye/eventbus/Signal";

assert.throws(() => {

        new YourTest();
        new FailedTestCaseTest();
        new BugeyeTest();

        Brain.instance()
            .recognize(Signal.TEST_CASE_STARTED)
            .recognize(Signal.BUGEYE_REPORT);
    },
    NegativeDiagnoseException,
    "FailedTestCaseTest.intentionallyFails()"
);
