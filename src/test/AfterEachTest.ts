import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";

import {Test, TestClass} from "../main";
import AfterEach from "../main/AfterEach";

@Immutable
@TestClass
export default class AfterEachTest {

    private property = "Initial value";

    @Test
    public nothing(): void {
        this.property = "New value";
        assert.equal(this.property, "New value");
    }

    @AfterEach
    public executesWithPropertyValueSetByTestCase(): void {
        assert.equal(this.property, "New value");
    }
}