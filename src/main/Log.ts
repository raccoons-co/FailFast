/*eslint prefer-rest-params: "off"*/
import Annotation from "./Annotation";
import Immutable from "./Immutable";
import Brain from "./bugeye/eventbus/Brain";
import LogRecord from "./bugeye/eventbus/common/LogRecord";

@Immutable
class Log implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        return this.learnMethodApply;
    }

    private learnMethodApply(target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            Brain.instance()
                .learn(LogRecord, new LogRecord(target.constructor.name, propertyKey as string));
            return originalMethod.apply(this, arguments);
        }
    }
}

export default new Log().decorator();