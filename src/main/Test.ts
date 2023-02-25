import Annotation from "./Annotation";
import TestCaseInventory from "./TestCaseInventory";
import FailedTestCaseException from "./FailedTestCaseException";
import {TestCaseStatus} from "./TestCaseStatus";
import TestCaseRecord from "./TestCaseRecord";

class Test implements Annotation {

    public execute() {
        return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
            try {
                const method = descriptor.value;
                method.apply(target);
                TestCaseInventory.instance().keep(new TestCaseRecord(TestCaseStatus.PASSED, propertyKey));
            } catch (e) {
                TestCaseInventory.instance().keep(
                    new TestCaseRecord(TestCaseStatus.FAILED, propertyKey, (e as FailedTestCaseException).message));
            }
        }
    }
}

export default new Test().execute();
