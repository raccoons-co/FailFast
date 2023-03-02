import SensorNeuron from "../SensorNeuron";
import Brain from "../Brain";
import LogRecord from "./LogRecord";
import PassedTestCase from "./PassedTestCase";
import NegativeDiagnose from "./NegativeDiagnose";
import FailedTestCase from "./FailedTestCase";

//@Immutable
export default class TestReport implements SensorNeuron {

    activate(): void {
        Brain.instance()
            .learn(LogRecord.name, new LogRecord(this.constructor.name))
            .recognize(PassedTestCase.name)
            .recognize(FailedTestCase.name)
            .recognize(LogRecord.name)
            .recognize(NegativeDiagnose.name);
    }
}
