import {CleanWayBuilder} from "../main/index";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";
import BugeyeTest from "./BugeyeTest";
import NegativeDiagnoseException from "../main/bugeye/eventbus/sensor/NegativeDiagnoseException";

assert.throws(() => {
        CleanWayBuilder.instance()
            .assign(new YourTest())
            .assign(new FailedTestCaseTest())
            .assign(new BugeyeTest())
            .build();
    },
    NegativeDiagnoseException,
    "FailedTestCaseTest.intentionallyFails()"
);
