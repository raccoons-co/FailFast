import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {Arguments, ArgumentsSource, ParametrizedTest, TestClass} from "../main";

@Immutable
@TestClass
export default class ParameterizedTestTest {

    @ParametrizedTest
    @ArgumentsSource(ParameterizedTestTest.monadicValues())
    public acceptsSingleParameter(parameter: string): void {
        assert.equal(parameter, "Nice");
    }

    @ParametrizedTest
    @ArgumentsSource(ParameterizedTestTest.dyadicValues())
    public acceptsDoubleParameters(parameter1: string, parameter2: string): void {
        assert.equal(parameter1, "Nice");
        assert.equal(parameter2, "Awesome");
    }

    @ParametrizedTest
    @ArgumentsSource(ParameterizedTestTest.triadicValues())
    @ArgumentsSource(Array.of(
        new Arguments("Nice", "Awesome", 7),
        new Arguments("Nice", "Awesome", 7)
    ))
    public acceptsTripleParameters(parameter1: string, parameter2: string, parameter3: number): void {
        assert.equal(parameter1, "Nice");
        assert.equal(parameter2, "Awesome");
        assert.equal(parameter3, 7);
    }

    public static monadicValues(): Array<Arguments> {
        return Array.of(
            new Arguments("Nice"),
            new Arguments("Nice")
        );
    }

    public static dyadicValues(): Array<Arguments> {
        return Array.of(
            new Arguments("Nice", "Awesome"),
            new Arguments("Nice", "Awesome")
        );
    }

    public static triadicValues(): Array<Arguments> {
        return Array.of(
            new Arguments("Nice", "Awesome", 7),
            new Arguments("Nice", "Awesome", 7)
        );
    }
}
