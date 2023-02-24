import {BugEye, Test} from "../main/index";
import TestAnnotationTest from "./TestAnnotationTest";
import YourTest from "./YourTest";

export default class CleanWay extends BugEye {

    @Test
    public run() {
        try {
            new TestAnnotationTest();
            new YourTest();
        } catch(exception) {
            console.log(exception);
        }
    }
}
