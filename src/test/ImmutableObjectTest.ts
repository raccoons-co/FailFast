import {Immutable, Test} from "../main/index";
import {assert} from "chai";

@Immutable
export default class ImmutableObjectTest {

    private mutableProperty = "Mock string object";

    public setProperty(value: string) {
        this.mutableProperty = value;
    }

    @Test
    public throwsExceptionOnChangeProperty() {
        assert.throws(() => new ImmutableObjectTest().setProperty("New value"),
            "Cannot assign to read only property");
    }

    @Test
    public throwsExceptionOnCreateProperty() {
        assert.throws(() => {
                const descriptor = Object.create(null);
                descriptor.value = "static";
                Object.defineProperty(new ImmutableObjectTest(), "newPropertyKey", descriptor);
            },
            "Cannot define property");
    }

    @Test
    public hasCorrectInstanceType() {
        assert.instanceOf(new ImmutableObjectTest(), ImmutableObjectTest);
    }
}
