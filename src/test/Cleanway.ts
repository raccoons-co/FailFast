import {Test} from "../main/index";
import TestAnnotationTest from "./TestAnnotationTest";
import YourTest from "./YourTest";

export default class Cleanway {

    @Test
    public caseTestAnnotationTest() {
        new TestAnnotationTest();
    }

    @Test
    public caseYourTest(){
        new YourTest();
    }
}