export default class TestCasesInventory {

    private static inventoryInstance: TestCasesInventory;
    private testCases: Array<PropertyDescriptor>;

    private constructor() {
        this.testCases = [];
    }

    public static instance(): TestCasesInventory {
        if (!TestCasesInventory.inventoryInstance) {
            TestCasesInventory.inventoryInstance = new TestCasesInventory();
        }

        return TestCasesInventory.inventoryInstance;
    }

    public keep(method: PropertyDescriptor){
        return this.testCases.push(method);
    }

    public size(): number {
        return this.testCases.length;
    }
}
