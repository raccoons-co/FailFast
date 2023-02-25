>*A clean way to well-written TypeScript prose in the Node.js galaxy.*

#### Clean Way

The library provides an `EntryPoint` to `@Test`-driven development discipline 
practice.

Despite the code is 
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)
its tests and has 
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=bugs)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
rating.

```
NOTE: Decorators are an experimental feature.
```

To use this library please 
enable experimental support for decorators in your `tsconfig.json` 
and install package as development dependency.

```shell script
% npm i -D @raccoons-co/cleanway
```

Then implement `src/test/EntryPoint.ts` as follows:
~~~~
import {CleanWayBuilder} from "@raccoons-co/cleanway";
import YourTest from "./YourTest";

try {
    new CleanWayBuilder()
        .use(YourTest)
        .build();
} catch(exception) {
    console.log(exception);
}
~~~~

Then create an empty file `src/main/YourProgram.ts` 
and implement `src/test/YourTest.ts`cases:

~~~~
import {Test} from "@raccoons-co/cleanway";

export default class YourTest {

    @Test
    public nothing() {
        // But your assertions here.
    }

    @Test
    public else() {
        // More assertions.
    }

    @Test
    public matters() {
        // For your clean code.
    }
}
~~~~

Finally paste scripts section to `package.json`:
~~~~
"scripts": {
  "build": "tsc",
  "pretest": "npm run build",
  "test": "node dist/test/EntryPoint"
}
~~~~

Now you are ready to follow clean way while developing your program locally 
and running test cases with your continuous integration platform. 

~~~~shell script
% npm test
~~~~

Write `YourTest` cases, fail fast 
and have a nice journey in the Node.js galaxy.