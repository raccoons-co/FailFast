import {Immutable} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import RecognitionPayload from "../RecognitionPayload";

@Immutable
export default class AssignedMethodDisplayName implements Neuron {

    private readonly methodName: string;
    private readonly customName: string;


    constructor(methodName: string, customName: string) {
        this.methodName = methodName;
        this.customName = customName;
    }

    activate(payload: RecognitionPayload): void {
        (payload.value() as Map<string, string>)
            .set(this.methodName, this.customName);
    }
}
