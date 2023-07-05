import {Immutable} from "@raccoons-co/ethics";
import {BrainException, Test, TestClass} from "../main";
import {assert} from "chai";
import Brain from "../main/bugeye/eventbus/Brain";
import TestSummary from "../main/bugeye/eventbus/neuron/TestSummary";
import FailedTestCase from "../main/bugeye/eventbus/neuron/FailedTestCase";
import ThrownException from "../main/bugeye/eventbus/neuron/ThrownException";

@Immutable
@TestClass
export default class BrainTest {

    @Test
    public memorySizeAfterLearningFirstNeuron(): void {
        Brain.instance().learn(BrainTest, new TestSummary());
        assert.equal(Brain.instance().memorySize(BrainTest), 1);
    }

    @Test
    public memorySizeAfterLearningSecondNeuron(): void {
        Brain.instance().learn(BrainTest, new TestSummary());
        assert.equal(Brain.instance().memorySize(BrainTest), 2);
    }

    @Test
    public forgetsMemory(): void {
        Brain.instance().forget(BrainTest);
        assert.equal(Brain.instance().memorySize(BrainTest), 0);
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
}
