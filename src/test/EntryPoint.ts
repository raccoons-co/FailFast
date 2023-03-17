import {BrainException, CleanWayBuilder} from "../main/index";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";
import BrainTest from "./BrainTest";
import ImmutableObjectTest from "./ImmutableObjectTest";
import StrictTest from "./StrictTest";

assert.throws(() => {
        CleanWayBuilder.instance()
            .assign(new YourTest())
            .assign(new FailedTestCaseTest())
            .assign(new BrainTest())
            .assign(new ImmutableObjectTest())
            .assign(new StrictTest())
            .build();
    },
    BrainException,
    "This is ok."
);
