import {DisplayName, Test, TestClass} from "../main";
import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import Brain from "../main/bugeye/eventbus/Brain";
import AssignedClassDisplayName from "../main/bugeye/eventbus/neuron/AssignedClassDisplayName";
import RecognitionPayload from "../main/bugeye/eventbus/RecognitionPayload";

@TestClass
@Immutable
@DisplayName("Custom DisplayNameTest")
export default class ClassDisplayNameTest {

    @Test
    public hasAssignedClassDisplayName(): void {
        assert.equal(Brain.instance().memorySize(AssignedClassDisplayName), 1);
    }

    @Test
    public recognizesCorrectClassDisplayName(): void {
        const customName = new Array<string>();
        Brain.instance()
            .recognize(AssignedClassDisplayName, new RecognitionPayload(customName));
        assert.equal(customName.pop(), "Custom DisplayNameTest");
    }
}
