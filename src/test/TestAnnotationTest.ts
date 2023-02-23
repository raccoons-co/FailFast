import {Test, TestCasesInventory} from "../main/index";
import {assert} from "chai";

export default class TestAnnotationTest {

    public ignoreMethodAtTheBeginning(): void {
        assert.fail("Non test method at the beginning shouldn't fail.");
    }

    @Test
    public casesCountAfterFirstTest(): void {
        assert.equal(TestCasesInventory.instance().size(), 1);
    }

    public ignoreMethodInTheMeddle(): void {
        assert.fail("Non test method at the middle shouldn't fail.");
    }

    @Test
    public casesCountAfterSecondTest(): void {
        assert.equal(TestCasesInventory.instance().size(), 2);
    }

    public ignoreMethodInTheEnd(): void {
        assert.fail("Non test method at the end shouldn't fail.");
    }
}