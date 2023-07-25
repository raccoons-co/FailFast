import {Immutable} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import RecognitionPayload from "../RecognitionPayload";

@Immutable
export default class AssignedClassDisplayName implements Neuron {

    private readonly customName: string;

    constructor(customName: string) {
        this.customName = customName;
    }

    activate(payload: RecognitionPayload): void {
        (payload.value() as Array<string>)
            .push(this.customName);
    }
}
