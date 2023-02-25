import {TestCaseStatus} from "./TestCaseStatus";

export default class TestCaseRecord {

    private testStatus: TestCaseStatus;
    private propertyKey: string;
    private note: string;

    constructor(testStatus: TestCaseStatus, propertyKey: string, note = String()) {
        this.testStatus = testStatus;
        this.propertyKey = propertyKey;
        this.note = note;
    }

    public toString(): string {
        return this.testStatus + ": " + this.propertyKey +" "+ this.note;
    }

    public status(): TestCaseStatus {
        return this.testStatus;
    }
}
