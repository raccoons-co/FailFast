import {CleanWayBuilder} from "../main/index";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";

try {
    new CleanWayBuilder()
        .assign(YourTest)
        .assign(FailedTestCaseTest)
        .build();
} catch(exception) {
    console.log(exception);
}
