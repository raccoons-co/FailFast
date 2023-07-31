import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import RecognitionPayload from "../RecognitionPayload";

@Immutable
export default class AssignedClassDisplayName implements Neuron {

    private readonly customName: string;

    constructor(customName: string) {
        this.customName = Strict.notNull(customName);
    }

    activate(payload: RecognitionPayload): void {
        Strict.notNull(payload);
        const customName: Array<string> = payload.value();
        customName.push(this.customName);
    }
}
