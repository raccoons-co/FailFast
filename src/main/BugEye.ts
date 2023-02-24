import TestCasesInventory from "./TestCasesInventory";

export default class BugEye {

    public log() {
        TestCasesInventory.instance().summary();
    }
}
