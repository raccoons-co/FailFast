import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {Test} from "../main";
import TestClass from "../main/TestClass";

@Immutable
@TestClass
export default class PropertyTest {

    private readonly property: number;

    constructor() {
        this.property = 7;
    }

    @Test
    public objectPropertyAccessibleByTestCase(): void {
        assert.equal(this.property, 7);
    }

    @Test
    public objectMethodAccessibleByTestCase(): void {
        assert.equal(this.value(), 8);
    }

    public value(): number {
        return 8;
    }
}
