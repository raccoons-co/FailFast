import {Immutable, Log, Test} from "../main/index";
import {assert} from "chai";

@Immutable
export default class ImmutableTest {

    private mockString = "Mock object";

    public rename(value: string) {
        this.mockString = value;
    }

    @Log
    @Test
    public immutableObjectThrowsException() {
        assert.throws(() => new ImmutableTest().rename("New value"),
            "Cannot assign to read only property");
    }
}
