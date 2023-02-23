export default class TestCasesInventory {

    private static inventoryInstance: TestCasesInventory;
    private methodsList: Array<PropertyDescriptor>;

    private constructor() {
        this.methodsList = [];
    }

    public static instance(): TestCasesInventory {
        if (!TestCasesInventory.inventoryInstance) {
            TestCasesInventory.inventoryInstance = new TestCasesInventory();
        }

        return TestCasesInventory.inventoryInstance;
    }

    public keep(method: PropertyDescriptor){
        return this.methodsList.push(method);
    }

    public size(): number {
        return this.methodsList.length;
    }
}
