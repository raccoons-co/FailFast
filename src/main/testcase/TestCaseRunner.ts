import TestCase from "./TestCase";
import Handler from "../pubsub/Handler";

export default class TestCaseRunner implements Handler {
    public accept(testCase: TestCase) {
        testCase.execute();
    }
}
