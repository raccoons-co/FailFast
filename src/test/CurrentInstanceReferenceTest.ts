import {Any} from "@raccoons-co/genera";
import {assert} from "chai";
import {Test, TestClass} from "../main";

@TestClass
export default class CurrentInstanceReferenceTest {

    private property: string;
    private readonly magicNumber = 7;
    private controller: Any;

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
        this.property = "";
    }

    @Test
    public objectIsNewForEachTest(): void {
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

    @Test
    public objectHasNoInitialValuefForProperty(): void {
        this.controller = new AbortController();
        assert.instanceOf(this.controller, AbortController);
    }

    public publicMethod(): string {
        return String("Test public method");
    }

    public privateMethod(): number {
        return this.magicNumber;
    }
}
