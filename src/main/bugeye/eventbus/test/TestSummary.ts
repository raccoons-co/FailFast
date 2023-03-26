import {Immutable} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import StartedTestCase from "./StartedTestCase";
import PassedTestCase from "./PassedTestCase";

@Immutable
export default class TestSummary implements Neuron {

    public activate(): void {
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
