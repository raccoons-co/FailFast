import {Test} from "../main/index";

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