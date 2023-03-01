import {Test} from "../main/index";
import {assert} from "chai";

export default class BugEyeTest {

    @Test
    public something() {
        assert.ok("Something.");
    }
}