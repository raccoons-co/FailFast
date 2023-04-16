import {Strict} from "@raccoons-co/ethics";

export default class NullProbeMock {

    public publicFiled: string;
    protected protectedFiled: number;
    private privateFiled: object;

    constructor(publicFiled: string, protectedFiled: number, privateFiled: object) {
        this.publicFiled = publicFiled;
        this.protectedFiled = protectedFiled;
        this.privateFiled = privateFiled;
    }

    private privateMethod() {
        // Intentionally empty
    }

    protected protectedMethod(parameter1: number): number {
        Strict.notNull(parameter1);
        return parameter1;
    }

    public publicMethod(parameter1: string, parameter2: string) {
        Strict.notNull(parameter1);
        return this.publicFiled + parameter1 + parameter2;
    }
}
