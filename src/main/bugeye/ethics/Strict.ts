import NullPointerException from "./NullPointerException";
import Immutable from "../../Immutable";

/**
 * Static method to enforce a strict clean code ethics.
 */
@Immutable
export default class Strict {

    /**
     * Ensures that an object reference passed as a parameter is not null.
     *
     * @param reference of an object
     * @param message of the exception if the check fails (optional)
     * @return the non-null reference that was validated
     * @throws NullPointerException if reference is null
     */
    public static notNull<T>(reference: T, message?: string): T {
        if (reference == null) {
            throw new NullPointerException(message);
        }
        return reference;
    }
}
