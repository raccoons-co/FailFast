import {Any} from "@raccoons-co/genera";

export default interface Neuron {
    activate(...args: Any[]): void;
}
