import {Test, TestCasesInventory} from "../main/index";
import {assert} from "chai";

export default class TestAnnotationTest {

    public ignoreMethodAtTheBeginning() {
        assert.fail("Non test method at the beginning shouldn't fail.");
    }

    @Test
    public casesCountAfterFirstTest() {
        assert.equal(TestCasesInventory.instance().size(), 1);
    }

    public ignoreMethodInTheMeddle() {
        assert.fail("Non test method at the middle shouldn't fail.");
    }

    @Test
    public casesCountAfterSecondTest() {
        assert.equal(TestCasesInventory.instance().size(), 2);
    }

    public ignoreMethodInTheEnd() {
        assert.fail("Non test method at the end shouldn't fail.");
    }
}