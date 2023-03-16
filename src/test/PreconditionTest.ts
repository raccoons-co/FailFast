import {Immutable, Log, Test} from "../main/index";
import {assert} from "chai";
import Check from "../main/bugeye/ethics/Check";
import NullPointerException from "../main/bugeye/ethics/NullPointerException";

@Immutable
export default class PreconditionTest {

    @Log
    @Test
    public throwsExceptionIfNullPointer() {
        assert.throws(
            () => Check.notNull(null, "Check for null"),
            NullPointerException,
            "Check for null"
        );
    }

    @Log
    @Test
    public throwsExceptionIfUndefinedPointer() {
        assert.throws(
            () => Check.notNull(undefined, "Check for undefined"),
            NullPointerException,
            "Check for undefined"
        );
    }

    @Log
    @Test
    public returnsSameObjectReference() {
        const reference = new Object();
        assert.deepEqual(Check.notNull(reference), reference);
    }

    @Log
    @Test
    public referenceNotEqualToAnother() {
        assert.notEqual(Check.notNull(new Object()), new Object());
    }

}
