import Handler from "../Handler";
import EventBus from "../EventBus";
import {TestCaseEvent} from "../TestCaseEvent";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";

export default class TestCase implements Handler {

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
            EventBus.instance()
                .subscribe(TestCaseEvent.passed, new PassedTestCase(this.propertyKey));
        } catch (e) {
            EventBus.instance()
                .subscribe(TestCaseEvent.failed,
                    new FailedTestCase(this.propertyKey, e as FailedTestCaseException));
        }

    }

}
