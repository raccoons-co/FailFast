import {Immutable, Strict} from "@raccoons-co/ethics";
import {Any} from "@raccoons-co/genera";

/**
 * `Arguments` provides access to an array of objects to be used for invoking a parameterized
 * test method.
 *
 * @public
 */
@Immutable
export default class Arguments implements Iterable<Any> {

    private readonly items: Any[];

    constructor(...items: Any[]) {
        this.items = Strict.notNull(items);
    }

    /**
     * Generator function that implements iterable protocol.
     */
    public* [Symbol.iterator](): Iterator<Any> {
        for (const item of this.items) {
            yield item;
        }
    }
}
