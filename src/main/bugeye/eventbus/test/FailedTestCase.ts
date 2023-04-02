import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import FailedTestCaseException from "./FailedTestCaseException";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import ThrownException from "../common/ThrownException";
import TestCase from "./TestCase";
import LogRecordBuilder from "../common/LogRecordBuilder";

@Immutable
export default class FailedTestCase implements Neuron {

    private readonly testCase: TestCase;
    private readonly exception: FailedTestCaseException;

    constructor(testCase: TestCase,
                exception: FailedTestCaseException) {
        this.testCase = Strict.notNull(testCase);
        this.exception = Strict.notNull(exception);
    }

    public activate(): void {
        const logRecord = new LogRecordBuilder()
            .addField("Failed")
            .addField(this.testCase.duration().toFixed(3))
            .addField(this.testCase.toString())
            .addField(this.exception.message)
            .build();

        Brain.instance()
            .learn(LogRecord, logRecord)
            .learn(ThrownException, new ThrownException(this.exception));
    }
}
