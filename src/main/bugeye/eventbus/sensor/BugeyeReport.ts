import SensorNeuron from "../SensorNeuron";
import {Signal} from "../Signal";
import Brain from "../Brain";
import LogRecord from "./LogRecord";

//@Immutable
export default class BugeyeReport implements SensorNeuron {

    activate(): void {
        Brain.instance()
            .learn(Signal.LOG, new LogRecord(this.constructor.name))
            .recognize(Signal.TEST_CASE_PASSED)
            .recognize(Signal.TEST_CASE_FAILED)
            .recognize(Signal.LOG)
            .recognize(Signal.DIAGNOSE);
    }
}
