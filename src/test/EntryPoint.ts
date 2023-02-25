import {CleanWayBuilder} from "../main/index";
import TestAnnotationTest from "./TestAnnotationTest";
import YourTest from "./YourTest";

try {
    new CleanWayBuilder()
        .use(TestAnnotationTest)
        .use(YourTest)
        .build();
} catch(exception) {
    console.log(exception);
}
