import NullPointerException from "./NullPointerException";

export default class Precondition {

    /**
     * Ensures that an object reference passed as a parameter to the calling method is not null.
     *
     * @param reference of an object
     * @param message of the exception if the check fails (optional)
     * @return the non-null reference that was validated
     * @throws NullPointerException if reference is null
     */
    public static checkNotNull<T>(reference: T, message?: string): T {
        if (reference == null) {
            throw new NullPointerException(message);
        }
        return reference;
    }
}