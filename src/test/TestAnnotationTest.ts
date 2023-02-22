import {Test} from "@raccoons-co/cleanway";
import {assert} from "chai";
import TestsInventory from "../main/TestsInventory";

export default class TestAnnotationTest {

    public ignoreMethodAtTheBeginning() {
        assert.fail("Non test method at the beginning shouldn't fail.");
    }

    @Test
    public testsCountAfterFirstTest() {
        assert.equal(TestsInventory.instance().size(), 1);
    }

    public ignoreMethodInTheMeddle() {
        assert.fail("Non test method at the middle shouldn't fail.");
    }

    @Test
    public testsCountAfterSecondTest() {
        assert.equal(TestsInventory.instance().size(), 2);
    }

    public ignoreMethodInTheEnd() {
        assert.fail("Non test method at the end shouldn't fail.");
    }
}