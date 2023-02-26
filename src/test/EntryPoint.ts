import EntryPointTest from "./EntryPointTest";
import {CleanWayBuilder} from "../main/index";

try {
    new CleanWayBuilder()
        .use(new EntryPointTest())
        .build();
} catch(exception) {
    console.log(exception);
}
