export default class MicronizedMock {

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

    protected protectedMethod() {
        // Intentionally empty
    }

    public publicMethod() {
        // Intentionally empty
    }

    public anotherPublicMethod() {
        // Intentionally empty
    }
}
