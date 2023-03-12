/*eslint prefer-rest-params: "off"*/
import Annotation from "./Annotation";
import Brain from "./bugeye/eventbus/Brain";
import LogRecord from "./bugeye/eventbus/common/LogRecord";
import Immutable from "./Immutable";

@Immutable
class Log implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.constructor.name));
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