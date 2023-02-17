export default interface Annotation {
    execute(): (target: object, propertyKey: string, descriptor: PropertyDescriptor) => void;
}