import {Arguments, ArgumentsSource, BeforeEach, ParameterizedTest, RepeatedTest, Test, TestClass} from "../main";
import {assert} from "chai";

@TestClass
export default class BeforeEachTest {

    private value = 0;

    @BeforeEach
    public setUp(): void {
        this.value = 7;
    }

    @Test
    public hasCorrectValueInTest(): void {
        assert.equal(this.value, 7);
    }

    @RepeatedTest(3)
    public hasCorrectValueInRepeatedTest(): void {
        assert.equal(this.value, 7);
    }

    @ParameterizedTest
    @ArgumentsSource(Array.of(new Arguments(7)))
    public hasCorrectValueInParameterizedTest(expectedValue: number): void {
        assert.equal(this.value, expectedValue);
    }
}
