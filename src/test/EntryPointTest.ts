import {Test} from "../main";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseException from "../main/bugeye/subscriptions/FailedTestCaseException";
import FailedTestCaseTest from "./FailedTestCaseTest";

export default class EntryPointTest {

    @Test
    public passedTestDoesNotThrowException() {
        assert.doesNotThrow(() => {
                new YourTest();
                new FailedTestCaseTest();
            },
            FailedTestCaseException
        );
    }
}
