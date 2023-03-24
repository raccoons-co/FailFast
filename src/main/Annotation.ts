import Method from "./type/Method";

export default interface Annotation {
    decorator(): Method;
}
