import {TestStatus} from "./TestStatus";

export default class CaseRecord {

    private testStatus: TestStatus;
    private propertyKey: string;
    private note: string;

    constructor(testStatus: TestStatus, propertyKey: string, note = String()) {
        this.testStatus = testStatus;
        this.propertyKey = propertyKey;
        this.note = note;
    }

    public toString(): string {
        return this.testStatus + ": " + this.propertyKey +" "+ this.note;
    }

    public status(): TestStatus {
        return this.testStatus;
    }
}
