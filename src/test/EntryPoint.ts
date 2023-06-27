import {BrainException, CleanWayBuilder} from "../main/index";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";
import BrainTest from "./BrainTest";
import StopwatchTest from "./StopwatchTest";
import {PropertyTest} from "./PropertyTest";

assert.throws(() => {
        CleanWayBuilder.instance()
            .assign(new YourTest())
            .assign(new FailedTestCaseTest())
            .assign(new BrainTest())
            .assign(new StopwatchTest())
            .assign(new PropertyTest())
            .build();
    },
    BrainException,
    "This is ok."
);
