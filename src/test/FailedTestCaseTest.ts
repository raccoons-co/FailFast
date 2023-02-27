import {Test} from "../main/index";
import {assert} from "chai";

export default class FailedTestCaseTest {

    @Test
    public intentionallyFails() {
        assert.fail("That's ok.")
    }
}
