import {Immutable} from "@raccoons-co/ethics";
import {Test} from "../main/index";
import {assert} from "chai";
import DurationBuilder from "../main/bugeye/eventbus/test/DurationBuilder";

@Immutable
export default class DurationBuilderTest {

    @Test
    public noMeasurementDurationCloseToZero() {
        assert.closeTo(new DurationBuilder().start().finish().build(), 0, 0.1);
    }


    @Test
    public timeout() {
        const durationBuilder = new DurationBuilder();

        durationBuilder.start();
        durationBuilder.finish();

        assert.closeTo(durationBuilder.build(), 0, 0.1);
    }

}
