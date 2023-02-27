import {Test} from "../main";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseException from "../main/testcase/FailedTestCaseException";

export default class EntryPointTest {

    @Test
    public passedTestDoesNotThrowException() {
        assert.doesNotThrow(() => {
                new YourTest();
            },
            FailedTestCaseException
        );
    }
}
