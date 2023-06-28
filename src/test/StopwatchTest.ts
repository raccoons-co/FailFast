import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {Test, TestClass} from "../main";
import Stopwatch from "../main/util/Stopwatch";

@Immutable
@TestClass
export default class StopwatchTest {

    @Test
    public noMeasurementDurationCloseToZero() {
        const stopwatch = new Stopwatch();

        stopwatch.start();
        stopwatch.stop();

        assert.closeTo(stopwatch.elapsedTime(), 0, 0.5);
    }
}
