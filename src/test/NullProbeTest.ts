import {Immutable} from "@raccoons-co/ethics";
import {Brain, NullProbe, Test} from "../main/index";
import {assert} from "chai";
import NullProbeMock from "./given/NullProbeMock";
import StudiedClassMethod from "../main/bugeye/eventbus/nullprobe/StudiedClassMethod";

@Immutable
export default class NullProbeTest {

    @Test
    public brainKnowsClassMethodsForNullTest() {
        new NullProbe(new NullProbeMock("value", 1, new Object()))
            .methodsTest();
        assert.equal(Brain.instance().memory(StudiedClassMethod).length, 2);
    }
}
