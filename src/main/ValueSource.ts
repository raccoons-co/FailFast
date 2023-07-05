import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Any, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedValueSource from "./bugeye/eventbus/test/AssignedValueSource";

@Immutable
class ValueSource implements Annotation {

    public decorator(parameters: Any[]): Method {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return function learnValueSource(originalMethod: Method, context: ClassMethodDecoratorContext): void {
            Brain.instance()
                .learn(AssignedValueSource, new AssignedValueSource(originalMethod, parameters));
        };
    }
}

export default new ValueSource().decorator;
