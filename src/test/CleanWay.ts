import {Test} from "../main/index";
import TestAnnotationTest from "./TestAnnotationTest";
import YourTest from "./YourTest";

export default class CleanWay {

    @Test
    public runTestAnnotationTest(): void {
        new TestAnnotationTest();
    }

    @Test
    public runYourTest(): void {
        new YourTest();
    }
}
