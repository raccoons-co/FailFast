import {Test} from "../main/index";
import {assert} from "chai";
import TestsInventory from "../main/TestsInventory";


export default class TestAnnotationTest {

    @Test
    public testsCountAfterFirstTest() {
        assert.equal(TestsInventory.instance().methods().length, 1,"Incorrect tests count");
    }

    @Test
    public testsCountAfterSecondTest() {
        assert.equal(TestsInventory.instance().methods().length, 2,"Incorrect tests count");
    }
}