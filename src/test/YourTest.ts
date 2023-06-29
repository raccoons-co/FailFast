import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {Test, TestClass} from "../main";

@Immutable
@TestClass
export default class YourTest {

    @Test
    public nothing() {
        assert.ok("But your assertions here.");
    }

    @Test
    public else() {
        assert.ok("More assertions.");
    }

    @Test
    public matters() {
        assert.ok("For your clean code.");
    }
}
