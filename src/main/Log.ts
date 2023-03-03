/*eslint prefer-rest-params: "off"*/
import Annotation from "./Annotation";
import Brain from "./bugeye/eventbus/Brain";
import LogRecord from "./bugeye/eventbus/common/LogRecord";

class Log implements Annotation<MethodDecorator> {

    public decorator(): MethodDecorator {
        Brain.instance()
            .learn(LogRecord, new LogRecord(this.constructor.name));

        return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            const method = descriptor.value;
            descriptor.value = function () {
                Brain.instance()
                    .learn(LogRecord, new LogRecord(target.constructor.name, propertyKey as string));
                return method.apply(this, arguments);
            }
        }
    }
}

export default new Log().decorator();