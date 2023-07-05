import {Immutable} from "@raccoons-co/ethics";

@Immutable
export default class FailedTestCaseException extends Error {

    constructor(message?: string) {
        super(message);
    }
}
