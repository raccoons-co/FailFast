import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import RecognitionPayload from "../RecognitionPayload";

@Immutable
export default class AssignedMethodDisplayName implements Neuron {

    private readonly methodName: string;
    private readonly customName: string;

    constructor(methodName: string, customName: string) {
        this.methodName = Strict.notNull(methodName);
        this.customName = Strict.notNull(customName);
    }

    activate(payload: RecognitionPayload): void {
        Strict.notNull(payload);
        const customNames: Map<string, string> = payload.value();
        customNames.set(this.methodName, this.customName);
    }
}
