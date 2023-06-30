import {BrainException, CleanWayBuilder} from "../main";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";
import BrainTest from "./BrainTest";
import StopwatchTest from "./StopwatchTest";
import CurrentInstanceReferenceTest from "./CurrentInstanceReferenceTest";
import Brain from "../main/bugeye/eventbus/Brain";
import FailedTestCase from "../main/bugeye/eventbus/test/FailedTestCase";
import AfterEachTest from "./AfterEachTest";

assert.throws(
    () => {
        CleanWayBuilder.instance()
            .use(YourTest)
            .use(FailedTestCaseTest)
            .use(BrainTest)
            .use(StopwatchTest)
            .use(CurrentInstanceReferenceTest)
            .use(AfterEachTest)
            .build();
    },
    BrainException,
    "This is ok."
);

assert.equal(Brain.instance().memory(FailedTestCase).length, 2);
