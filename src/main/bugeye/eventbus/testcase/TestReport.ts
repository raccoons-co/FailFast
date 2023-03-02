import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import PassedTestCase from "./PassedTestCase";
import NegativeDiagnose from "./NegativeDiagnose";
import FailedTestCase from "./FailedTestCase";
import StartedTestCase from "./StartedTestCase";

//@Immutable
export default class TestReport implements Neuron {

    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.constructor.name))
            .recognize(StartedTestCase)
            .recognize(PassedTestCase)
            .recognize(FailedTestCase)
            .recognize(LogRecord)
            .recognize(NegativeDiagnose);
    }
}
