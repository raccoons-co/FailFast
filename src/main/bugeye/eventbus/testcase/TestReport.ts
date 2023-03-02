import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import PassedTestCase from "./PassedTestCase";
import FailedTestCase from "./FailedTestCase";
import StartedTestCase from "./StartedTestCase";
import ThrownException from "../common/ThrownException";

//@Immutable
export default class TestReport implements Neuron {

    activate(): void {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.constructor.name))
            .recognize(StartedTestCase)
            .recognize(PassedTestCase)
            .recognize(FailedTestCase)
            .recognize(LogRecord)
            .recognize(ThrownException);
    }
}
