import Neuron from "../Neuron";
import Immutable from "../../../Immutable";
import TestCase from "./TestCase";
import Brain from "../Brain";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import FailedTestCaseException from "./FailedTestCaseException";
import Precondition from "../../ethics/Precondition";

@Immutable
export default class StartedTestCase implements Neuron {

    private readonly testCase: TestCase;

    constructor(testCase: TestCase) {
        this.testCase = Precondition.checkNotNull(testCase);
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
