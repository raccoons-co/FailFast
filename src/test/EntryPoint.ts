import {BrainException, CleanWayBuilder} from "../main";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";
import BrainTest from "./BrainTest";
import StopwatchTest from "./StopwatchTest";
import CurrentInstanceReferenceTest from "./CurrentInstanceReferenceTest";
import Brain from "../main/bugeye/eventbus/Brain";
import FailedTestCase from "../main/bugeye/eventbus/neuron/FailedTestCase";
import AfterEachTest from "./AfterEachTest";
import ParameterizedTestTest from "./ParameterizedTestTest";

assert.throws(
    () => {
        CleanWayBuilder.instance()
            .use(YourTest)
            .use(FailedTestCaseTest)
            .use(BrainTest)
            .use(StopwatchTest)
            .use(CurrentInstanceReferenceTest)
            .use(AfterEachTest)
            .use(ParameterizedTestTest)
            .build();
    },
    BrainException,
    "This is ok."
);

assert.equal(Brain.instance().memorySize(FailedTestCase), 2);
