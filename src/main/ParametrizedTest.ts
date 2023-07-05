import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedValueSource from "./bugeye/eventbus/test/AssignedValueSource";

@Immutable
class ParametrizedTest implements Annotation {

    public decorator(): Method {
        return this.handleParametrizedTestCase;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private handleParametrizedTestCase(originalMethod: Method, context: ClassMethodDecoratorContext): void {
        Brain.instance()
            .recognize(AssignedValueSource)
            .forget(AssignedValueSource);
    }
}

export default new ParametrizedTest().decorator();
