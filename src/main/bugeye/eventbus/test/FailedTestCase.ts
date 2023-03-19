import Immutable from "../../../Immutable";
import Neuron from "../Neuron";
import Method from "./Method";
import FailedTestCaseException from "./FailedTestCaseException";
import Strict from "../../ethics/Strict";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import ThrownException from "../common/ThrownException";



@Immutable
export default class FailedTestCase implements Neuron {

    private readonly testCase: Method;
    private readonly exception: FailedTestCaseException;

    constructor(testCase: Method,
                exception: FailedTestCaseException) {
        this.testCase = Strict.notNull(testCase);
        this.exception = Strict.notNull(exception);
    }

    //@bondParent
    public activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord("Failed", this.testCase.toString(), this.exception.message.toString()))
            .learn(ThrownException, new ThrownException(this.exception));
    }
}
