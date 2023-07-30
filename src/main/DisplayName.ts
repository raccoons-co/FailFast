import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Class, Method} from "@raccoons-co/genera";
import AssignedClassDisplayName from "./bugeye/eventbus/neuron/AssignedClassDisplayName";
import Brain from "./bugeye/eventbus/Brain";
import AssignedMethodDisplayName from "./bugeye/eventbus/neuron/AssignedMethodDisplayName";

/**
 * `@DisplayName` is used to declare a custom name for the annotated test class or test methods.
 *
 * @public
 */
@Immutable
class DisplayName implements Annotation {

    public decorator(customName: string): Method {
        Strict.notNull(customName);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return function learnDisplayName(target: Class | Method, context: DecoratorContext): void {
            Strict.notNull(context);

            switch (context.kind) {
                case "class":
                    Brain.instance()
                        .learn(AssignedClassDisplayName, new AssignedClassDisplayName(customName));
                    break;
                case "method":
                    Brain.instance()
                        .learn(AssignedMethodDisplayName,
                            new AssignedMethodDisplayName(String(context.name), customName));
                    break;
            }
        };
    }
}

export default new DisplayName().decorator;
