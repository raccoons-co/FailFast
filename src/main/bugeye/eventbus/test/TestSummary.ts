import {Immutable} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import PassedTestCase from "./PassedTestCase";
import LogRecordBuilder from "../common/LogRecordBuilder";
import FailedTestCase from "./FailedTestCase";

@Immutable
export default class TestSummary implements Neuron {

    public activate(): void {
        const passedCount = this.count(PassedTestCase);
        const totalCount = passedCount + this.count(FailedTestCase);
        const logRecord = new LogRecordBuilder()
            .addField("Summary")
            .addField(passedCount.toString())
            .addField("of")
            .addField(totalCount.toString())
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
