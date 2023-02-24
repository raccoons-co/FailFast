import {BugEye, Test} from "../main/index";
import TestAnnotationTest from "./TestAnnotationTest";
import YourCleanWay from "./YourCleanWay";
import {assert} from "chai";

export default class CleanWay extends BugEye {

    @Test
    public runTestAnnotationTest() {
        assert.doesNotThrow( () => { new TestAnnotationTest() }, Error);
    }

    @Test
    public runYourTest() {
        assert.doesNotThrow( () => { new YourCleanWay() }, Error);
    }
}
