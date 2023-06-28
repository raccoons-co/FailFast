import {Immutable} from "@raccoons-co/ethics";
import {Test} from "../main/index";
import {assert} from "chai";
import Stopwatch from "../main/util/Stopwatch";
import TestClass from "../main/TestClass";

@Immutable
@TestClass
export default class StopwatchTest {

    @Test
    public noMeasurementDurationCloseToZero() {
        const stopwatch = new Stopwatch();

        stopwatch.start();
        stopwatch.stop();

        assert.closeTo(stopwatch.elapsedTime(), 0, 0.2);
    }
}
