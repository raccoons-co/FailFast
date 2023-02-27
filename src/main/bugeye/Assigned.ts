import Worker from "./Worker";

//@Immutable
export default class Assigned implements Worker {

    private testClass: object;

    constructor(testClass: object) {
        this.testClass = testClass;
    }

    execute(): void {
        console.log(this.testClass);
    }
}
