import {Immutable} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import TestCase from "./TestCase";
import PassedTestCase from "./PassedTestCase";
import LogRecordBuilder from "../common/LogRecordBuilder";

@Immutable
export default class TestSummary implements Neuron {

    public activate(): void {
        const logRecord = new LogRecordBuilder()
            .addField("Summary")
            .addField(this.count(PassedTestCase).toString())
            .addField("of")
            .addField(this.count(TestCase).toString())
            .build();

        Brain.instance()
            .learn(LogRecord, logRecord);
    }

    /**
     * Returns count of neurons in memory associated with the signal.
     */
    private count(signal: object): number {
        return Brain.instance()
            .memory(signal).length;
    }
}
