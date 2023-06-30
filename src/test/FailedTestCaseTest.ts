import {Immutable} from "@raccoons-co/ethics";
import {Test, TestClass} from "../main";
import {assert} from "chai";

@Immutable
@TestClass
export default class FailedTestCaseTest {

    @Test
    public failsIntentionally(): void {
        assert.fail("This is ok.");
    }

    @Test
    public something(): void {
        assert.ok("Something.");
    }

    @Test
    public failsIntentionallyAlso(): void {
        assert.fail("This is also ok.");
    }
}
