import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedTestCase from "./bugeye/eventbus/test/AssignedTestCase";

@Immutable
class Test implements Annotation {

    public decorator(): Method {
        return this.learnNewTestCase;
    }

    private learnNewTestCase(originalMethod: Method,
                             context: ClassMethodDecoratorContext): void {

        Brain.instance()
            .learn(AssignedTestCase, new AssignedTestCase(originalMethod, context));
    }
}

export default new Test().decorator();
