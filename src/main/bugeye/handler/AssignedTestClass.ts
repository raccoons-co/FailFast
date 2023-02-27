import Handler from "../Handler";

export default class AssignedTestClass implements Handler {

    private testClass: object;

    constructor(testClass : object) {
        this.testClass = testClass;
    }

    execute(): void {
        console.log(this.testClass);
    }
}