import {Immutable, Log, Test} from "../main/index";
import {assert} from "chai";
import Precondition from "../main/bugeye/ethics/Precondition";
import NullPointerException from "../main/bugeye/ethics/NullPointerException";

@Immutable
export default class PreconditionTest {

    @Log
    @Test
    public throwsExceptionIfNullPointer() {
        assert.throws(
            () => Precondition.checkNotNull(null, "Check for null"),
            NullPointerException,
            "Check for null"
        );
    }

    @Log
    @Test
    public throwsExceptionIfUndefinedPointer() {
        assert.throws(
            () => Precondition.checkNotNull(undefined, "Check for undefined"),
            NullPointerException,
            "Check for undefined"
        );
    }

    @Log
    @Test
    public returnsSameObjectReference() {
        const reference = new Object();
        assert.deepEqual(Precondition.checkNotNull(reference), reference);
    }

    @Log
    @Test
    public referenceNotEqualToAnother() {
        assert.notEqual(Precondition.checkNotNull(new Object()), new Object());
    }

}
