import RecognitionPayload from "./RecognitionPayload";

export default interface Neuron {
    activate(payload?: RecognitionPayload): void;
}
