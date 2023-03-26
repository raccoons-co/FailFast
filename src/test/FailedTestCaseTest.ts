import {Immutable} from "@raccoons-co/ethics";
import {Test} from "../main/index";
import {assert} from "chai";

@Immutable
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
