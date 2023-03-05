import Neuron from "../Neuron";
import Log from "../../../Log";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import StartedTestCase from "./StartedTestCase";
import PassedTestCase from "./PassedTestCase";

//@Immutable
export default class TestSummary implements Neuron {

    @Log
    activate(): void {

        const startedCount = Brain.instance()
            .memory(StartedTestCase).length.toString();
        const passedCount = Brain.instance()
            .memory(PassedTestCase).length.toString();

        Brain.instance()
            .learn(LogRecord, new LogRecord("Tests passed", passedCount, "of", startedCount));
    }
}
