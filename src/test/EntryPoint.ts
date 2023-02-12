import FailFastAnnotationTest from "./FailFastAnnotationTest";

try {
    new FailFastAnnotationTest();
} catch(exception) {
    console.log(exception);
}