import {Arguments, ArgumentsSource, BeforeEach, DisplayName, ParameterizedTest, Test, TestClass} from "../main";
import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import Brain from "../main/bugeye/eventbus/Brain";
import RecognitionPayload from "../main/bugeye/eventbus/RecognitionPayload";
import AssignedMethodDisplayName from "../main/bugeye/eventbus/neuron/AssignedMethodDisplayName";

@TestClass
@Immutable
export default class DisplayNameTest {

    private readonly customNamesMap = new Map<string, string>();

    @BeforeEach
    public setUp(): void {
        Brain.instance()
            .recognize(AssignedMethodDisplayName, new RecognitionPayload(this.customNamesMap));
    }

    @Test
    @DisplayName("Custom MethodDisplayName")
    public hasAssignedMethodDisplayName(): void {
        assert.equal(Brain.instance().memorySize(AssignedMethodDisplayName), 2);
    }

    @Test
    @DisplayName("Another Custom MethodDisplayName")
    public recognizesCorrectNumberOfMethodDisplayName(): void {
        assert.equal(this.customNamesMap.size, 2);
    }

    @Test
    public recognizesAllMethodsWithDisplayName(): void {
        const keys = ["hasAssignedMethodDisplayName", "recognizesCorrectNumberOfMethodDisplayName"];
        assert.hasAllKeys(this.customNamesMap, keys);
    }

    @ParameterizedTest
    @ArgumentsSource(Array.of(
        new Arguments("hasAssignedMethodDisplayName", "Custom MethodDisplayName"),
        new Arguments("recognizesCorrectNumberOfMethodDisplayName", "Another Custom MethodDisplayName")
    ))
    public nothing(methodName: string, customName: string): void {
        assert.equal(this.customNamesMap.get(methodName), customName);
    }
}
