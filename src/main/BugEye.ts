import TestCasesInventory from "./TestCasesInventory";

export default class BugEye {

    public log(): void {
        TestCasesInventory.instance().summary();
    }
}
