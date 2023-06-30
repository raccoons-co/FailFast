import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AfterEachTestCase from "./bugeye/eventbus/test/AfterEachTestCase";

@Immutable
class AfterEach implements Annotation {

    public decorator(): Method {
        return this.learnAfterEachTestCase;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private learnAfterEachTestCase(originalMethod: Method, context: ClassMethodDecoratorContext): void {
        Brain.instance()
            .learn(AfterEachTestCase, new AfterEachTestCase(originalMethod));
    }
}

export default new AfterEach().decorator();
