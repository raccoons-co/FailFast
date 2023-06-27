import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {Test} from "../main";

@Immutable
export class PropertyTest {

    private readonly property: number;

    constructor() {
        this.property = 7;
    }

    @Test
    public objectPropertyAccessibleByTestCase(): void {
        assert.equal(this.property, 7);
    }
}
