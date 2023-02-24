# Clean Way

##### A clean way to well-written TypeScript prose at Node.js galaxy .

This library provides an `EntryPoint` to `@Test`-driven development discipline practice in `CleanWayBuilder`. 
 ```
NOTE: Decorators are an experimental feature.
```
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=bugs)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)

##### CleanWayBuilder is simple.

Install library as development dependency:
```shell
% npm i -D @raccoons-co/cleanway
```

Enable experimental support for decorators in your `tsconfig.json`.

Implement `src/test/EntryPoint.ts`:
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

Create `src/test/YourTest.ts`:
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

Create empty file `src/main/YourProgram.ts`.

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

Start to write `YourTest` cases.

Have a nice ride.