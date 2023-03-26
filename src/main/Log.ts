import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Any, Class, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import LogRecord from "./bugeye/eventbus/common/LogRecord";

@Immutable
class Log implements Annotation {

    public decorator(): Method {
        return this.replacementMethod;
    }

    private replacementMethod(
        originalMethod: Method,
        context: ClassMethodDecoratorContext): Method {

        return function learnMethodCall(this: Class, ...args: Any[]): Any {
            Brain.instance()
                .learn(LogRecord, new LogRecord(this.constructor.name, String(context.name), ...args));
            return originalMethod.call(this, ...args);
        }
    }
}

export default new Log().decorator();
