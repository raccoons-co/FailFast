import {Test} from "../main/index";
import {assert} from "chai";


export default class TestAnnotationTest {

    @Test
    public nothing() {
        console.log("Nothing");
    }

    @Test
    public else() {
        console.log("Else");
    }
}