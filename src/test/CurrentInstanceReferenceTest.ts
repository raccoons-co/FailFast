import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {Test, TestClass} from "../main";

@Immutable
@TestClass
export default class CurrentInstanceReferenceTest {

    private readonly property: string;
    private readonly magicNumber = 7;

    constructor() {
        this.property = "Test property";
    }

    @Test
    public objectReferenceHasCorrectInstance(): void {
        assert.instanceOf(this, CurrentInstanceReferenceTest);
    }

    @Test
    public objectPropertyAccessibleByTest(): void {
        assert.equal(this.property, "Test property");
    }

    @Test
    public objectPublicMethodAccessibleByTest(): void {
        assert.equal(this.publicMethod(), "Test public method");
    }

    @Test
    public objectPrivateMethodAccessibleByTest(): void {
        assert.equal(this.privateMethod(), 7);
    }

    public publicMethod(): string {
        return String("Test public method");
    }

    public privateMethod(): number {
        return this.magicNumber;
    }
}
