import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import {RepeatedTest, TestClass} from "../main";
import Stopwatch from "../main/util/Stopwatch";

@TestClass
@Immutable
export default class StopwatchTest {

    @RepeatedTest(100)
    public noMeasurementDurationCloseToZero() {
        const stopwatch = new Stopwatch();

        stopwatch.start();
        stopwatch.stop();

        assert.closeTo(stopwatch.elapsedTime(), 0, 0.5);
    }
}
