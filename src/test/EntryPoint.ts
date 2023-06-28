import {BrainException, CleanWayBuilder} from "../main/index";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";
import BrainTest from "./BrainTest";
import StopwatchTest from "./StopwatchTest";
import PropertyTest from "./PropertyTest";

assert.throws(() => {
        CleanWayBuilder.instance()
            .assign(YourTest)
            .assign(FailedTestCaseTest)
            .assign(BrainTest)
            .assign(StopwatchTest)
            .assign(PropertyTest)
            .build();
    },
    BrainException,
    "This is ok."
);
