import {Immutable, Strict} from "@raccoons-co/ethics";
import {Annotation, Class, Method} from "@raccoons-co/genera";
import AssignedClassDisplayName from "./bugeye/eventbus/neuron/AssignedClassDisplayName";
import Brain from "./bugeye/eventbus/Brain";

@Immutable
class DisplayName implements Annotation {

    public decorator(customName: string): Method {

        Strict.notNull(customName);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return function learnDisplayName(target: Class, context: ClassDecoratorContext): void {

            Strict.notNull(context);
            Strict.checkArgument(String(context.kind) === "class");

            Brain.instance()
                .learn(AssignedClassDisplayName, new AssignedClassDisplayName(customName));
        };
    }
}

export default new DisplayName().decorator;
