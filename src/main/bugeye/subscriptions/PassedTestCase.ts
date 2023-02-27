import Handler from "../Handler";

export default class PassedTestCase implements Handler {

    private propertyKey: string | symbol;

    constructor(propertyKey: string | symbol) {
        this.propertyKey = propertyKey;
    }

    execute(): void {
        console.log("\x1b[32mpassed\x1b[0m: %s", this.propertyKey);
    }
}