import {Immutable} from "@raccoons-co/ethics";
import {Test} from "../main/index";
import {assert} from "chai";
import ElapsedTime from "../main/bugeye/elapsedtime/ElapsedTime";

@Immutable
export default class StopwatchTest {

    @Test
    public noMeasurementCloseToZero() {
        const stopwatch = new ElapsedTime();

        stopwatch.addTimepoint();
        stopwatch.addTimepoint();

        assert.closeTo(stopwatch.value(), 0, 0.1);
    }

    @Test
    public ignoreUnclosedMeasurement() {
        const stopwatch = new ElapsedTime();

        stopwatch.addTimepoint();
        stopwatch.addTimepoint();
        stopwatch.addTimepoint();

        assert.closeTo(stopwatch.value(), 0, 0.1);
    }
}
