import Neuron from "../Neuron";
import Log from "../../../Log";
import Brain from "../Brain";
import StartedTestCase from "./StartedTestCase";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";

//@Immutable
export default class TestReport implements Neuron {

    @Log
    activate(): void {
        Brain.instance()
            .recognize(StartedTestCase)
            .recognize(PassedTestCase)
            .recognize(FailedTestCase);
    }
}
