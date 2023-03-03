import {Test} from "../main/index";
import Log from "../main/Log";

export default class YourTest {

    @Log
    @Test
    public nothing() {
        // But your assertions here.
    }

    @Log
    @Test
    public else() {
        // More assertions.
    }

    @Log
    @Test
    public matters() {
        // For your clean code.
    }
}
