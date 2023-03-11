import {Immutable, Log, Test} from "../main/index";

@Immutable
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
