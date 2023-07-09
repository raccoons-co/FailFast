import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import Neuron from "../Neuron";
import RecognitionPayload from "../RecognitionPayload";

@Immutable
export default class AssignedBeforeEach implements Neuron {

    private readonly method: Method;

    constructor(method: Method) {
        this.method = Strict.notNull(method);
    }

    public activate(testClassInstance: RecognitionPayload) {
        Strict.notNull(testClassInstance);
        this.method.call(testClassInstance.valueOf());
    }
}

