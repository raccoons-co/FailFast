import TestCasesInventory from "./TestCasesInventory";

export default abstract class BugEye {

    public abstract run(): void;

    public log() {
        TestCasesInventory.instance().summary();
    }
}
