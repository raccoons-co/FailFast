import {
    Immutable,
    Test,
    Strict,
    NullPointerException
} from "../main/index";
import {assert} from "chai";

@Immutable
export default class StrictTest {

    @Test
    public throwsExceptionIfNullPointer() {
        assert.throws(
            () => Strict.notNull(null, "Null is prohibited"),
            NullPointerException,
            "Null is prohibited"
        );
    }

    @Test
    public throwsExceptionIfUndefinedPointer() {
        assert.throws(
            () => Strict.notNull(undefined, "Undefined is prohibited"),
            NullPointerException,
            "Undefined is prohibited"
        );
    }

    @Test
    public returnsSameObjectReference() {
        const reference = new Object();
        assert.deepEqual(Strict.notNull(reference), reference);
    }

    @Test
    public referenceNotEqualToAnother() {
        assert.notEqual(Strict.notNull(new Object()), new Object());
    }
}
