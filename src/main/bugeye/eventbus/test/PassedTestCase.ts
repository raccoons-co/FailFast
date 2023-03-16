import Immutable from "../../../Immutable";
import Neuron from "../Neuron";
import Method from "./Method";
import Check from "../../ethics/Check";
import Brain from "../Brain";
import Log from "../../../Log";
import LogRecord from "../common/LogRecord";

@Immutable
export default class PassedTestCase implements Neuron {

    private readonly testCase: Method;

    constructor(testCase: Method) {
        this.testCase = Check.notNull(testCase);
    }

    @Log
    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.testCase.toString()));
    }
}
