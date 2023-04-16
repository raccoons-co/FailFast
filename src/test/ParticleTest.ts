import {Immutable} from "@raccoons-co/ethics";
import {Test} from "../main/index";
import {assert} from "chai";
import Particle from "../main/util/Particle";
import MicronizedMock from "./given/MicronizedMock";

@Immutable
export default class ParticleTest {

    @Test
    public determinesCorrectNumberOfMethods() {
        const micronizedMock = new MicronizedMock("value", 1, new Object());
        assert.equal(new Particle(micronizedMock).methods().length, 4);
    }

    @Test
    public hasExpectedNamesList() {
        const micronizedMock = new MicronizedMock("value", 1, new Object());
        const expectedMethods = ["privateMethod", "protectedMethod", "publicMethod", "anotherPublicMethod"];
        assert.deepEqual(new Particle(micronizedMock).names(), expectedMethods);
    }
}
