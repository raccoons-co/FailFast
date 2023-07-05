import {Immutable} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "./LogRecord";
import PassedTestCase from "./PassedTestCase";
import LogRecordBuilder from "./LogRecordBuilder";
import FailedTestCase from "./FailedTestCase";

@Immutable
export default class TestSummary implements Neuron {

    public activate(): void {
        const passedCount = Brain.instance().memorySize(PassedTestCase);
        const totalCount = passedCount + Brain.instance().memorySize(FailedTestCase);

        const logRecord = new LogRecordBuilder()
            .addField("Summary")
            .addField(passedCount.toString())
            .addField("of")
            .addField(totalCount.toString())
            .build();

        Brain.instance()
            .learn(LogRecord, logRecord);
    }
}
