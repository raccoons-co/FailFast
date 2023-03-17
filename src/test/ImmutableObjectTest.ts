import {Immutable, Log, Test} from "../main/index";
import {assert} from "chai";

@Immutable
export default class ImmutableObjectTest {

    private mutableProperty = "Mock string object";

    public setProperty(value: string) {
        this.mutableProperty = value;
    }

    @Log
    @Test
    public throwsExceptionOnChangeProperty() {
        assert.throws(() => new ImmutableObjectTest().setProperty("New value"),
            "Cannot assign to read only property");
    }

    @Log
    @Test
    public throwsExceptionOnCreateProperty() {
        assert.throws(() => {
                const descriptor = Object.create(null);
                descriptor.value = "static";
                Object.defineProperty(new ImmutableObjectTest(), "newPropertyKey", descriptor);
            },
            "Cannot define property");
    }
}
