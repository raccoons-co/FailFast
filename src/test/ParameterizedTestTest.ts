import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {TestClass} from "../main";
import ValueSource from "../main/ValueSource";
import ParametrizedTest from "../main/ParametrizedTest";

@Immutable
@TestClass
export default class ParameterizedTestTest {

    public readonly arrayValues = Array.of(["Nice"], ["Nice"], ["Nice"]);
    public readonly values = Array.of(["Nice", "Awesome"], ["Nice", "Awesome"]);

    @ParametrizedTest
    @ValueSource(new ParameterizedTestTest().arrayValues)
    public nothing(testParameter: string): void {
        assert.equal(testParameter, "Nice");
    }

    @ParametrizedTest
    @ValueSource(new ParameterizedTestTest().values)
    public else(testParameter1: string, testParameter2: string): void {
        assert.equal(testParameter1, "Nice");
        assert.equal(testParameter2, "Awesome");
    }
}
