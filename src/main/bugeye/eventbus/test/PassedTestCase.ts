import Immutable from "../../../Immutable";
import Neuron from "../Neuron";
import Method from "./Method";
import Strict from "../../ethics/Strict";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";

@Immutable
export default class PassedTestCase implements Neuron {

    private readonly testCase: Method;

    constructor(testCase: Method) {
        this.testCase = Strict.notNull(testCase);
    }

    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord("Passed", this.testCase.toString()));
    }
}
