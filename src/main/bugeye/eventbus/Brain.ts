import {Signal} from "./Signal";
import SensorNeuron from "./SensorNeuron";

//@Immutable
export default class Brain {

    private static singleInstance: Brain;
    private readonly neurons: Map<Signal, Array<SensorNeuron>>;

    private constructor() {
        this.neurons = new Map<Signal, Array<SensorNeuron>>();
    }

    public static instance(): Brain {
        if (!Brain.singleInstance) {
            Brain.singleInstance = new Brain();
        }
        return Brain.singleInstance;
    }

    private memory(signal: Signal): Array<SensorNeuron> {
        const memory = this.neurons.get(signal);
        if (memory) {
            return memory;
        } else {
            const newMemory = new Array<SensorNeuron>();
            this.neurons.set(signal, newMemory);
            return newMemory;
        }
    }

    public learn(signal: Signal, sensor: SensorNeuron) {
        this.memory(signal).push(sensor);
        return this;
    }

    public recognize(signal: Signal): Brain {
        if (this.neurons.has(signal)) {
            this.memory(signal).forEach((sensor) => {
                sensor.activate();
            });
        }
        return this;
    }
}
