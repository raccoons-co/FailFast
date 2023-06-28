import {Immutable} from "@raccoons-co/ethics";
import {Test, TestClass} from "../main";
import {assert} from "chai";

@Immutable
@TestClass
export default class FailedTestCaseTest {

    @Test
    public failsIntentionally() {
        assert.fail("This is ok.")
    }

    @Test
    public something() {
        assert.ok("Something.");
    }

    @Test
    public failsIntentionallyAlso() {
        assert.fail("This is also ok.")
    }
}
