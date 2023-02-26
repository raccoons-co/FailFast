>*A clean way to well-written TypeScript prose in the Node.js galaxy.*

#### Clean Way

The library provides an `EntryPoint` to `@Test`-driven development discipline 
practice.

Despite the code of the `@Test` annotation has
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

Then copy files to your project from [cleanway-skeleton](https://github.com/raccoons-co/cleanway-skeleton)
template:
- src/test/EntryPoint.ts
- src/test/YourTest.ts
- src/main/YourProgram.ts

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