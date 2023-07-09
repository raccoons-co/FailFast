import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {Arguments, ArgumentsSource, ParameterizedTest, TestClass} from "../main";

@Immutable
@TestClass
export default class ParameterizedTestTest {

    @ParameterizedTest
    @ArgumentsSource(ParameterizedTestTest.monadicArguments())
    public acceptsSingleParameter(parameter: string): void {
        assert.equal(parameter, "Nice");
    }

    @ParameterizedTest
    @ArgumentsSource(ParameterizedTestTest.dyadicArguments())
    public acceptsDoubleParameters(parameter1: string, parameter2: string): void {
        assert.equal(parameter1, "Nice");
        assert.equal(parameter2, "Awesome");
    }

    @ParameterizedTest
    @ArgumentsSource(ParameterizedTestTest.triadicArguments())
    @ArgumentsSource(Array.of(
        new Arguments("Nice", "Awesome", 7),
        new Arguments("Nice", "Awesome", 7)
    ))
    public acceptsTripleParameters(parameter1: string, parameter2: string, parameter3: number): void {
        assert.equal(parameter1, "Nice");
        assert.equal(parameter2, "Awesome");
        assert.equal(parameter3, 7);
    }

    public static monadicArguments(): Array<Arguments> {
        return Array.of(
            new Arguments("Nice"),
            new Arguments("Nice")
        );
    }

    public static dyadicArguments(): Array<Arguments> {
        return Array.of(
            new Arguments("Nice", "Awesome"),
            new Arguments("Nice", "Awesome")
        );
    }

    public static triadicArguments(): Array<Arguments> {
        return Array.of(
            new Arguments("Nice", "Awesome", 7),
            new Arguments("Nice", "Awesome", 7)
        );
    }
}
