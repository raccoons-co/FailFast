import {Test} from "../main/index";
import TestAnnotationTest from "./TestAnnotationTest";
import YourTest from "./YourTest";

export default class CleanWay {

    @Test
    public caseTestAnnotationTest(): void {
        new TestAnnotationTest();
    }

    @Test
    public caseYourTest(): void {
        new YourTest();
    }
}
