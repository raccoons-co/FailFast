import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Method} from "@raccoons-co/genera";

@Immutable
class AfterEach implements Annotation {

    public decorator(): Method {
        return this.replacementMethod;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private replacementMethod(originalMethod: Method, context: ClassMethodDecoratorContext): void {
    }


}

export default new AfterEach().decorator();
