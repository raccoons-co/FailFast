import {Immutable, Log, Test} from "../main/index";
import {assert} from "chai";

@Immutable
export default class YourTest {

    @Log
    @Test
    public nothing() {
        assert.ok("But your assertions here.");
    }

    @Log
    @Test
    public else() {
        assert.ok("More assertions.");
    }

    @Log
    @Test
    public matters() {
        assert.ok("For your clean code.");
    }
}
