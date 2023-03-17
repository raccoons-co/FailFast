import {Immutable, Log, Test} from "../main/index";
import {assert} from "chai";

@Immutable
export default class FailedTestCaseTest {

    @Test
    @Log
    public failsIntentionally() {
        assert.fail("This is ok.")
    }

    @Test @Log
    public something() {
        assert.ok("Something.");
    }

    @Log @Test
    public failsIntentionallyAlso() {
        assert.fail("This is also ok.")
    }
}
