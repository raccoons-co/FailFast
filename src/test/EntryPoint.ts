import TestAnnotationTest from "./TestAnnotationTest";
import YourTest from "./YourTest";

try {
    new TestAnnotationTest();
    new YourTest();
} catch(exception) {
    console.log(exception);
}
