import CaseRecord from "./CaseRecord";
import {TestStatus} from "./TestStatus";

export default class TestCasesInventory {

    private static inventoryInstance: TestCasesInventory;
    private testCases: Array<CaseRecord>;

    private constructor() {
        this.testCases = [];
    }

    public static instance(): TestCasesInventory {
        if (!TestCasesInventory.inventoryInstance) {
            TestCasesInventory.inventoryInstance = new TestCasesInventory();
        }

        return TestCasesInventory.inventoryInstance;
    }

    public keep(record: CaseRecord) {
        return this.testCases.push(record);
    }

    public size(): number {
        return this.testCases.length;
    }

    public count(status: TestStatus): number {
        let count = 0;
        this.testCases.forEach((caseRecord) => {
            (caseRecord.status() == status) ? count++ : count;
        });
        return count;
    }

    public summary(qualityGate= 0) {
        this.testCases.forEach((record) => {
            console.log(record.toString());
        });

        const passedTests = this.count(TestStatus.PASSED);
        console.log("Tests passed: %s of %s", passedTests, this.size());

        if ( passedTests + qualityGate != this.size() ) {
            throw new Error("Nice try!")
        }
        else {
            console.log("Clean!");
        }
    }
}
