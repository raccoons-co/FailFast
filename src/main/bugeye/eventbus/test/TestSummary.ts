import Neuron from "../Neuron";
import Log from "../../../Log";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import StartedTestCase from "./StartedTestCase";
import PassedTestCase from "./PassedTestCase";

//@Immutable
export default class TestSummary implements Neuron {

    private count(signal: object): string {
        return Brain.instance()
            .memory(signal).length.toString();
    }

    @Log
    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord("Passed", this.count(PassedTestCase), "of", this.count(StartedTestCase)));
    }
}
