import {Immutable, Log, Test} from "../main/index";
import {assert} from "chai";

@Immutable
export default class ImmutableTest {

    private mutableProperty = "Mock string object";

    public setProperty(value: string) {
        this.mutableProperty = value;
    }

    @Log
    @Test
    public immutableObjectThrowsExceptionOnChange() {
        assert.throws(() => new ImmutableTest().setProperty("New value"),
            "Cannot assign to read only property");
    }
}
