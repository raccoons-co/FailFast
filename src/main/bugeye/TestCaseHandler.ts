import TestCaseSubscription from "./TestCaseSubscription";
import Handler from "./Handler";

export default class TestCaseHandler implements Handler {

    public accept(testCase: TestCaseSubscription) {
        testCase.execute();
    }
}
