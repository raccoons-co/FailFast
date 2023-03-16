import {Immutable, Log, Test} from "../main/index";
import {assert} from "chai";
import Strict from "../main/bugeye/ethic/Strict";
import NullPointerException from "../main/bugeye/ethic/NullPointerException";

@Immutable
export default class PreconditionTest {

    @Log
    @Test
    public throwsExceptionIfNullPointer() {
        assert.throws(
            () => Strict.notNull(null, "Strict for null"),
            NullPointerException,
            "Strict for null"
        );
    }

    @Log
    @Test
    public throwsExceptionIfUndefinedPointer() {
        assert.throws(
            () => Strict.notNull(undefined, "Strict for undefined"),
            NullPointerException,
            "Strict for undefined"
        );
    }

    @Log
    @Test
    public returnsSameObjectReference() {
        const reference = new Object();
        assert.deepEqual(Strict.notNull(reference), reference);
    }

    @Log
    @Test
    public referenceNotEqualToAnother() {
        assert.notEqual(Strict.notNull(new Object()), new Object());
    }

}
