#Clean Way
#####A clean way to well-written TypeScript prose at Node.js galaxy .

This library provides an `EntryPoint` to `@Test`-driven development discipline practice in `CleanWayBuilder`. 
 ```
NOTE: Decorators are an experimental feature.
```
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=bugs)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
#####CleanWayBuilder is simple.

Install library as development dependency:
```shell
% npm i -D @raccoons-co/cleanway
```

Enable experimental support for decorators in your `tsconfig.json`.

Implement `src/test/EntryPoint.ts`:
~~~~
import CleanWayBuilder from "@raccoons-co/cleanway";

try {
    new CleanWayBuilder().log();
} catch(exception) {
    console.log(exception);
}
~~~~

Implement `src/test/CleanWayBuilder.ts`:
~~~~
import {BugEye, Test} from "../main/index";
import YourTest from "./YourTest";

export default class CleanWayBuilder extends BugEye {

    @Test
    public run(): void {
        try {
            new YourTest();
        } catch(exception) {
            console.log(exception);
        }
    }
}
~~~~

Write `src/test/YourTest.ts` class:
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

Create `src/main/YourProgram.ts` file.

Paste scripts section to `package.json`:
~~~~
"scripts": {
  "build": "tsc",
  "pretest": "npm run build",
  "test": "node dist/test/EntryPoint"
}
~~~~

Run locally and with your CI:
~~~~shell script
% npm test
~~~~

Have a nice ride.