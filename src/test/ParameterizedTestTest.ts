import {Immutable} from "@raccoons-co/ethics";
import {Any} from "@raccoons-co/genera";
import {assert} from "chai";
import {ParametrizedTest, TestClass, ValueSource} from "../main";

@Immutable
@TestClass
export default class ParameterizedTestTest {

    @ParametrizedTest
    @ValueSource(new ParameterizedTestTest().values())
    public nothing(testParameter: string): void {
        assert.equal(testParameter, "Nice");
    }

    /*
        @ParametrizedTest
        @ValueSource(new ParameterizedTestTest().values)
        public else(testParameter1: string, testParameter2: string): void {
            assert.equal(testParameter1, "Nice");
            assert.equal(testParameter2, "Awesome");
        }
    */

    public values(): Array<Any> {
        return Array.of(["Nice"], ["Nice"], ["Nice"]);
    }
}
