import {Immutable, Strict} from "@raccoons-co/ethics";
import Brain from "./bugeye/eventbus/Brain";
import StudiedClassMethod from "./bugeye/eventbus/nullprobe/StudiedClassMethod";
import Particle from "./util/Particle";

@Immutable
export default class NullProbe {

    private readonly probedInstance: object;

    constructor(probedInstance: object) {
        this.probedInstance = Strict.notNull(probedInstance);
    }

    public constructorTest(): NullProbe {
        return this;
    }

    public methodsTest(): NullProbe {
        new Particle(this.probedInstance).methods()
            .filter(method => method.length !== 0)
            .forEach(method => {
                Brain.instance()
                    .learn(StudiedClassMethod, new StudiedClassMethod(this.probedInstance, method));
            });
        return this;
    }

    public launch() {
        Brain.instance()
            .recognize(StudiedClassMethod);
    }
}


