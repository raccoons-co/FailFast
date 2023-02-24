import Annotation from "./Annotation";
import TestCasesInventory from "./TestCasesInventory";
import FailedCaseException from "./FailedCaseException";
import {TestStatus} from "./TestStatus";
import CaseRecord from "./CaseRecord";

class Test implements Annotation {

    public execute() {
        return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
            try {
                const method = descriptor.value;
                method.apply(target);
                TestCasesInventory.instance().keep(new CaseRecord(TestStatus.PASSED, propertyKey));
            } catch (e) {
                TestCasesInventory.instance().keep(
                    new CaseRecord(TestStatus.FAILED, propertyKey, (e as FailedCaseException).message));
            }
        }
    }
}

export default new Test().execute();
