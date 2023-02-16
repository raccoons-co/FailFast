/*eslint @typescript-eslint/no-empty-function: "off"*/
import {Test} from "../main/index";

export default class YourTest {
    @Test
    public nothing() {}

    @Test
    public else() {}

    @Test
    public matters() {}
}