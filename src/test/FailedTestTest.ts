import {Test} from "../main";
import {assert} from "chai";

export default class FailedTestTest {

    @Test
    public intentionallyFails() {
        assert.fail("That's ok.");
    }
}