import TestCaseSignal from "./testcase/TestCaseSignal";
import SensorNeuron from "./SensorNeuron";

//@Immutable
export default class Brain {

    private static singleInstance: Brain;
    private readonly neurons: Map<TestCaseSignal, Array<SensorNeuron>>;

    private constructor() {
        this.neurons = new Map<TestCaseSignal, Array<SensorNeuron>>();
    }

    public static instance(): Brain {
        if (!Brain.singleInstance) {
            Brain.singleInstance = new Brain();
        }
        return Brain.singleInstance;
    }

    private memory(signal: TestCaseSignal): Array<SensorNeuron> {
        const memory = this.neurons.get(signal);
        if (memory) {
            return memory;
        } else {
            const newMemory = new Array<SensorNeuron>();
            this.neurons.set(signal, newMemory);
            return newMemory;
        }
    }

    public learn(signal: TestCaseSignal, sensor: SensorNeuron) {
        this.memory(signal).push(sensor);
        return this;
    }

    public recognize(signal: TestCaseSignal): Brain {
        if (this.neurons.has(signal)) {
            this.memory(signal).forEach((sensor) => {
                sensor.activate();
            });
        }
        return this;
    }
}
