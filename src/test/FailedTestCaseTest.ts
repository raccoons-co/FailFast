import {Test} from "../main";
import {assert} from "chai";

export default class FailedTestCaseTest {

    @Test
    public intentionallyFails() {
        assert.fail("That's ok.")
    }
}
