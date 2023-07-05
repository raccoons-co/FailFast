import {Immutable, Strict} from "@raccoons-co/ethics";
import {Any} from "@raccoons-co/genera";

@Immutable
export default class Arguments {

    private readonly items: Any[];

    constructor(...items: Any[]) {
        this.items = Strict.notNull(items);
    }

    public* [Symbol.iterator]() {
        for (const item of this.items) {
            yield item;
        }
    }
}
