>*A clean way to well-written TypeScript prose in the Node.js galaxy.*

#### Clean Way

The library provides an `EntryPoint` to `@Test`-driven development discipline 
practice.

Library can:
 - Run `@Test` method;
 - `@Log` method call;
 - Make class instance `@Immutable`.

Despite the code has
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)
its tests and has
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=bugs)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
,
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
and
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)

```
NOTE: Decorators are an experimental feature.
```



#### Simple auto-start

Create a new repository from [cleanway-skeleton](https://github.com/raccoons-co/cleanway-skeleton)
template.

#### Manual start

To use this library you must enable the 
experimental support for decorators in your `tsconfig.json` 
and install package as development dependency.

```shell script
% npm i -D @raccoons-co/cleanway
```

Implement `src/test/EntryPoint.ts`:
~~~~
import {CleanWayBuilder} from "@raccoons-co/cleanway";
import YourTest from "./YourTest";

CleanWayBuilder.instance()
    .assign(new YourTest())
    .build();
~~~~
Implement `src/test/YourTest.ts`:
~~~~
import {Immutable, Log, Test} from "@raccoons-co/cleanway";

@Immutable
export default class YourTest {

    @Log
    @Test
    public nothing() {
        // But your assertions here.
    }

    @Log
    @Test
    public else() {
        // More assertions.
    }

    @Log
    @Test
    public matters() {
        // For your clean code.
    }
}
~~~~


Create `src/main/YourProgram.ts`.

Finally paste scripts section to `package.json`:
~~~~
"scripts": {
  "build": "tsc",
  "pretest": "npm run build",
  "test": "node dist/test/EntryPoint"
}
~~~~

#### Run

Now you are ready to follow clean way.
Run test locally and with continuous integration platform. 

~~~~shell script
% npm test
~~~~

Write `YourTest` cases, fail fast 
and have a nice journey in the Node.js galaxy.

Read the story [Clean Way: A Node.js galaxy adventures](https://bus.raccoons.co/artefacts/cleanway).

[Support us with €1](https://send.monobank.ua/jar/6KuKuBf8ki)