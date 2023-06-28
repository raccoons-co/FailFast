import {Immutable} from "@raccoons-co/ethics";
import {Brain, BrainException, Test} from "../main/index";
import {assert} from "chai";
import TestSummary from "../main/bugeye/eventbus/test/TestSummary";
import FailedTestCase from "../main/bugeye/eventbus/test/FailedTestCase";
import ThrownException from "../main/bugeye/eventbus/common/ThrownException";
import TestClass from "../main/TestClass";

@Immutable
@TestClass
export default class BrainTest {

    @Test
    public memoryExistsAfterLearning(): void {
        Brain.instance().learn(BrainTest, new TestSummary());
        assert.exists(Brain.instance().memory(BrainTest));
    }

    @Test
    public memoryHasNeuronInstance(): void {
        assert.instanceOf(Brain.instance().memory(BrainTest).pop(), TestSummary);
    }

    @Test
    public memorySizeAfterLearningFirstNeuron(): void {
        assert.equal(Brain.instance().memory(BrainTest).length, 1);
    }

    @Test
    public memorySizeAfterLearningSecondNeuron(): void {
        Brain.instance().learn(BrainTest, new TestSummary());
        assert.equal(Brain.instance().memory(BrainTest).length, 2);
    }

    @Test
    public recognizesFailedTestCaseException(): void {
        assert.throws(
            () => Brain.instance()
                .recognize(FailedTestCase)
                .recognize(ThrownException),
            BrainException,
            "This is ok"
        );
    }

    @Test
    public forgetsSignal(): void {
        Brain.instance().forget(BrainTest);
        assert.equal(Brain.instance().memory(BrainTest).length, 0);
    }
}
