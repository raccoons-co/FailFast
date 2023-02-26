import TestCase from "./TestCase";
import CleanWayHandler from "./CleanWayHandler";

export default class TestRunner implements CleanWayHandler {
    public accept(testCase: TestCase) {
        testCase.execute();
    }
}
