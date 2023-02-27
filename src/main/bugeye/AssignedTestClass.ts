import Worker from "./Worker";

export default class AssignedTestClass implements Worker {

    private testClass: object;

    constructor(testClass : object) {
        this.testClass = testClass;
    }

    execute(): void {
        console.log(this.testClass);
    }
}