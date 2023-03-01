import {CleanWayBuilder, NegativeDiagnoseException} from "../main/index";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";
import BugeyeTest from "./BugeyeTest";

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
