import Immutable from "../../../Immutable";
import Neuron from "../Neuron";
import Method from "./Method";
import Strict from "../../ethics/Strict";
import Brain from "../Brain";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";

@Immutable
export default class StartedTestCase implements Neuron {

    private readonly testCase: Method;

    constructor(testCase: Method) {
        this.testCase = Strict.notNull(testCase);
    }

    public activate() {
        try {
            this.testCase.apply();
            Brain.instance()
                .learn(PassedTestCase, new PassedTestCase(this.testCase))
        } catch (error) {
            Brain.instance()
                .learn(FailedTestCase, new FailedTestCase(this.testCase, error as FailedTestCaseException));
        }
    }
}
