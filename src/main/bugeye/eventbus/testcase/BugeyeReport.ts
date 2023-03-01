import SensorNeuron from "../SensorNeuron";
import TestCaseSignal from "./TestCaseSignal";
import Brain from "../Brain";
import LogRecord from "./LogRecord";

//@Immutable
export default class BugeyeReport implements SensorNeuron {

    activate(): void {
        Brain.instance()
            .learn(TestCaseSignal.LOG, new LogRecord(this.constructor.name))
            .recognize(TestCaseSignal.PASSED)
            .recognize(TestCaseSignal.FAILED)
            .recognize(TestCaseSignal.LOG)
            .recognize(TestCaseSignal.DIAGNOSE);
    }
}
