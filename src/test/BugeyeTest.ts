import {Test} from "../main/index";
import {assert} from "chai";

export default class BugeyeTest {

    @Test
    public something() {
        assert.ok("Something.");
    }
}