import {Test} from "../main/index";
import {assert} from "chai";

export default class FailedTestCaseTest {

    @Test
    public intentionallyFails() {
        assert.fail("This is ok.")
    }

    @Test
    public something() {
        assert.ok("Something.");
    }

    @Test
    public intentionallyFailsAlso() {
        assert.fail("This is also ok.")
    }

}
