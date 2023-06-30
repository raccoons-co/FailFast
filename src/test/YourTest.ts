import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {AfterEach, Test, TestClass} from "../main";

@Immutable
@TestClass
export default class YourTest {

    private property = "For your clean code.";

    @Test
    public nothing(): void {
        assert.ok("But your assertions here.");
    }

    @Test
    public else(): void {
        assert.equal(this.method(), "More assertions.");
    }

    @Test
    public matters() {
        assert.equal(this.property, "For your clean code.");
    }

    @AfterEach
    public tearDown(): void {
        this.property = "";
    }

    private method(): string {
        return "More assertions.";
    }
}
