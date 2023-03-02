import {CleanWayBuilder, NegativeDiagnoseException} from "../main/index";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";

assert.throws(() => {
        CleanWayBuilder.instance()
            .assign(new YourTest())
            .assign(new FailedTestCaseTest())
            .build();
    },
    NegativeDiagnoseException,
    "FailedTestCaseTest.intentionallyFails()"
);
