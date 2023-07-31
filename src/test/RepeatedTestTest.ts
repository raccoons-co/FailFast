import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {Arguments, ArgumentsSource, ParameterizedTest, RepeatedTest, Test, TestClass} from "../main";
import Brain from "../main/bugeye/eventbus/Brain";
import TestSummary from "../main/bugeye/eventbus/neuron/TestSummary";

@TestClass
@Immutable
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

    @ParameterizedTest
    @ArgumentsSource(Array.of(
        new Arguments(0),
        new Arguments(-1),
        new Arguments(0.1)
    ))
    public throwsExceptionIfIllegalRepetitions(illegalRepetitions: number): void {
        assert.throws(() => this.repeatedTestMock(illegalRepetitions));
    }

    private repeatedTestMock(repetitions: number): object {
        return new class AnonymousTest {
            @RepeatedTest(repetitions)
            public nothing(): void {
                // Intentionally empty
            }
        };
    }
}
