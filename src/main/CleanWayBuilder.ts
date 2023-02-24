import TestCaseInventory from "./TestCaseInventory";

export default class CleanWayBuilder  {

    public use(...args: any[]) {
        return this;
    }

    public build() {
        TestCaseInventory.instance().summary();
    }
}
