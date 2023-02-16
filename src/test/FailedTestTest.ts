import {Test} from "../main";
import {assert} from "chai";

export default class FailedTestTest {

    @Test
    public testIntentionallyFails() {
        assert.fail("This test intentionally fails.");
    }
}