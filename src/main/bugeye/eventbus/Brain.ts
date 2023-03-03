import Neuron from "./Neuron";

//@Immutable
export default class Brain {

    private static singleInstance: Brain;
    private readonly neurons: Map<object, Array<Neuron>>;

    private constructor() {
        this.neurons = new Map<object, Array<Neuron>>();
    }

    public static instance(): Brain {
        if (!Brain.singleInstance) {
            Brain.singleInstance = new Brain();
        }
        return Brain.singleInstance;
    }

    private memory(signal: object): Array<Neuron> {
        const memory = this.neurons.get(signal);
        if (memory) {
            return memory;
        } else {
            const newMemory = new Array<Neuron>();
            this.neurons.set(signal, newMemory);
            return newMemory;
        }
    }

    public learn(signal: object, neuron: Neuron) {
        this.memory(signal).push(neuron);
        return this;
    }

    public recognize(signal: object): Brain {
        if (this.neurons.has(signal)) {
            this.memory(signal).forEach((neuron) => {
                neuron.activate();
            });
        }
        return this;
    }
}
