import {Test} from "../main/index";
import {assert} from "chai";
import Log from "../main/Log";

export default class FailedTestCaseTest {

    @Test
    @Log
    public intentionallyFails() {
        assert.fail("This is ok.")
    }

    @Test @Log
    public something() {
        assert.ok("Something.");
    }

    @Log @Test
    public intentionallyFailsAlso() {
        assert.fail("This is also ok.")
    }

}
