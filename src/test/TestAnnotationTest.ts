import {Test} from "../main/index";
import {assert} from "chai";
import TestCaseInventory from "../main/TestCaseInventory";
import {TestCaseStatus} from "../main/TestCaseStatus";

export default class TestAnnotationTest {

    public ignoreMethodAtTheBeginning() {
        assert.fail("Non-test method at the beginning shouldn't fail.");
    }

    @Test
    public casesCountBeforeFirstTest() {
        assert.equal(TestCaseInventory.instance().size(), 0);
    }

    public ignoreMethodInTheMiddle() {
        assert.fail("Non-test method at the middle shouldn't fail.");
    }

    @Test
    public casesCountAfterFirstTest() {
        assert.equal(TestCaseInventory.instance().size(), 1);
    }

    @Test
    public casesCountAfterSecondTest() {
        assert.equal(TestCaseInventory.instance().size(), 2);
    }

    @Test
    public passedCasesCountAfterThirdTest() {
        assert.equal(TestCaseInventory.instance().count(TestCaseStatus.PASSED), 3);

    }

    public ignoreMethodInTheEnd() {
        assert.fail("Non-test method at the end shouldn't fail.");
    }
}
