import {Brain, BrainException, Immutable, Log, Test} from "../main/index";
import {assert} from "chai";
import TestSummary from "../main/bugeye/eventbus/test/TestSummary";
import FailedTestCase from "../main/bugeye/eventbus/test/FailedTestCase";
import ThrownException from "../main/bugeye/eventbus/common/ThrownException";

@Immutable
export default class BrainTest {

    @Log
    @Test
    public memoryExistsAfterLearning() {
        Brain.instance().learn(BrainTest, new TestSummary());
        assert.exists(Brain.instance().memory(BrainTest));
    }

    @Log
    @Test
    public memoryHasNeuronInstance() {
        assert.instanceOf(Brain.instance().memory(BrainTest).pop(), TestSummary);
    }

    @Log
    @Test
    public memorySizeAfterLearningFirstNeuron() {
        assert.equal(Brain.instance().memory(BrainTest).length, 1);
    }

    @Log
    @Test
    public memorySizeAfterLearningSecondNeuron() {
        Brain.instance().learn(BrainTest, new TestSummary());
        assert.equal(Brain.instance().memory(BrainTest).length, 2);
    }

    @Log
    @Test
    public recognizesFailedTestCaseException() {
        assert.throws(
            () => Brain.instance()
                .recognize(FailedTestCase)
                .recognize(ThrownException),
            BrainException,
            "This is ok"
        );
    }
}
