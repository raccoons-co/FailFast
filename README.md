[![npm version](https://badge.fury.io/js/@raccoons-co%2Fcleanway.svg)](https://badge.fury.io/js/@raccoons-co%2Fcleanway)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_cleanway&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_cleanway)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)

>*A clean way to well-written TypeScript prose in the Node.js galaxy.*
```
TypeScript 5.0 have implemented the new decorators standard!
```
#### Clean Way 
The library
provides an `EntryPoint` to `@Test`-driven development discipline 
practice.

 - Run `@Test` method;
 - Make class instances `@Immutable`;
 - `@Log` method call while debugging.

#### Simple auto-start

Create a new repository from [cleanway-skeleton](https://github.com/raccoons-co/cleanway-skeleton)
template.

#### Manual start

Install package as development dependency.

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
import {Immutable, Test} from "@raccoons-co/cleanway";
import {assert} from "chai";

@Immutable
export default class YourTest {

    @Test
    public nothing() {
        assert.ok("But your assertions here.");
    }

    @Test
    public else() {
        assert.ok("More assertions.");
    }

    @Test
    public matters() {
        assert.ok("For your clean code.");
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