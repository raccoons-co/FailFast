import {Status} from "./Status";
import FailedTestCaseException from "./FailedTestCaseException";
import Subscription from "./Subscription";

export default class TestCaseSubscription implements Subscription {

    private target: object;
    private propertyKey: string | symbol;
    private descriptor: PropertyDescriptor;

    constructor(target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        this.target = target;
        this.propertyKey = propertyKey;
        this.descriptor = descriptor;
    }

    public execute() {
        try {
            const method = this.descriptor.value;
            method.apply(this.target);
            console.log("%s: %s", Status.PASSED, this.propertyKey);
        } catch (e) {
            console.log("%s: %s - %s", Status.FAILED, this.propertyKey,
                (e as FailedTestCaseException).message);
            throw new FailedTestCaseException();
        }

    }

}
