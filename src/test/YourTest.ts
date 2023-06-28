import {Immutable} from "@raccoons-co/ethics";
import Test from "../main/Test";
import {assert} from "chai";
import TestClass from "../main/TestClass";


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
