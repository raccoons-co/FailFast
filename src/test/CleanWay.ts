import {BugEye, Test} from "../main/index";
import TestAnnotationTest from "./TestAnnotationTest";
import YourTest from "./YourTest";
import {assert} from "chai";

export default class CleanWay extends BugEye {

    @Test
    public runTestAnnotationTest(): void {
        assert.doesNotThrow( () => { new TestAnnotationTest() }, Error);
    }

    @Test
    public runYourTest(): void {
        assert.doesNotThrow( () => { new YourTest() }, Error);
    }
}
