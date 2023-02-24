import TestCaseInventory from "./TestCaseInventory";

export default class CleanWayBuilder  {

    private testCaseClasses: Array<Function> = [];

    public use(className: Function) {
        this.testCaseClasses.push(className);
        return this;
    }

    public build() {
        this.testCaseClasses.forEach((className)=> {
            console.log(className);
        });
        TestCaseInventory.instance().summary();
    }
}
