import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {AfterEach, Arguments, ArgumentsSource, ParametrizedTest, RepeatedTest, Test, TestClass} from "../main";

@Immutable
@TestClass
export default class YourTest {

    private property = "For your clean code.";

    @Test
    public nothing(): void {
        assert.ok("But your assertions here.");
    }

    @ParametrizedTest
    @ArgumentsSource(Array.of(
        new Arguments("More assertions.", 1)
    ))
    @ArgumentsSource(YourTest.values())
    public else(parameter1: string, parameter2: number): void {
        assert.equal(this.method(), parameter1);
        assert.isNumber(parameter2);
    }

    @RepeatedTest(3)
    public matters() {
        assert.equal(this.property, "For your clean code.");
    }

    @AfterEach
    public tearDown(): void {
        this.property = "";
    }

    public static values(): Array<Arguments> {
        return Array.of(
            new Arguments("More assertions.", 2),
            new Arguments("More assertions.", 3)
        );
    }

    private method(): string {
        return "More assertions.";
    }
}
