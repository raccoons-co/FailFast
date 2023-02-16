import TestAnnotationTest from "./TestAnnotationTest";
import FailedTestTest from "./FailedTestTest";
import YourTest from "./YourTest";

try {
    new TestAnnotationTest();
    new FailedTestTest();
    new YourTest();
} catch(exception) {
    console.log(exception);
}