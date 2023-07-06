import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {RepeatedTest, Test, TestClass} from "../main";
import Brain from "../main/bugeye/eventbus/Brain";
import TestSummary from "../main/bugeye/eventbus/neuron/TestSummary";

@Immutable
@TestClass
export default class RepeatedTestTest {

    @RepeatedTest(7)
    public runsRepeatedTest(): void {
        Brain.instance().learn(RepeatedTestTest, new TestSummary());
        assert.ok(true);
    }

    @Test
    public hasCorrectRunsCount(): void {
        assert.equal(Brain.instance().memorySize(RepeatedTestTest), 7);
    }
}
