/* eslint-disable */
import Immutable from "./Immutable";
import Brain from "./bugeye/eventbus/Brain";
import LogRecord from "./bugeye/eventbus/common/LogRecord";
import Annotation from "./Annotation";

@Immutable
class Log implements Annotation<Function> {

    public decorator(): Function {
        return this.loggedMethod;
    }

    private loggedMethod<This, Args extends any[], Return>(
        target: (this: This, ...args: Args) => Return,
        context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>): Function {

        return function learnMethodCall(this: This, ...args: Args): Return {
            Brain.instance()
                .learn(LogRecord, new LogRecord(this as string, String(context.name), ...args));
            return target.call(this, ...args);
        }
    }
}

export default new Log().decorator();
