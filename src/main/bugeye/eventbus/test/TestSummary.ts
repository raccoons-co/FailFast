import Immutable from "../../../Immutable";
import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import StartedTestCase from "./StartedTestCase";
import PassedTestCase from "./PassedTestCase";
import Log from "../../../Log";

@Immutable
export default class TestSummary implements Neuron {

    @Log
    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord("Summary", this.count(PassedTestCase),
                "of", this.count(StartedTestCase)));
    }

    /**
     * Returns count of neurons in memory associated with the signal.
     */
    private count(signal: object): string {
        return Brain.instance()
            .memory(signal).length.toString();
    }
}
