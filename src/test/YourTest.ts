import {Immutable, Log, Test} from "../main/index";
import {assert} from "chai";

@Immutable
export default class YourTest {

    @Test
    @Log
    public nothing() {
        assert.ok("But your assertions here.");
    }

    @Test
    @Log
    public else() {
        assert.ok("More assertions.");
    }


    @Test
    @Log
    public matters() {
        assert.ok("For your clean code.");
    }
}
