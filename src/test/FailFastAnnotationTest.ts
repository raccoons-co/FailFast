import {FailFast} from "../main/index";

export default class FailFastAnnotationTest {
    @FailFast
    public nothing() {
        console.log("Nothing");
    }

    @FailFast
    public else() {
        console.log("Else");
    }
}