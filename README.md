# Cleanway
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)

`@Test` annotation for TypeScript to support a test-driven development discipline.
```
NOTE: Decorators are an experimental feature that may change in future releases.
```

Install library as development dependency:
```shell
% npm install @raccoons-co/cleanway --save-dev
```

Enable the `experimentalDecorators` compiler option in your `tsconfig.json`.

Implement `src/test/YourTest.ts`:
```
import {Test} from "@raccoons-co/cleanway";

export default class YourTest {

    @Test
    public nothing(): void {
        // But your assertions here.
    }

    @Test
    public else(): void {
        // More assertions.
    }

    @Test
    public matters(): void {
        // For your clean code.
    }
}
```

Implement your main `./src/test/EntryPoint.ts`:
```
import YourTest from "./YourTest";

try {
    new YourTest();
} catch(exception) {
    console.log(exception);
}
```

Create empty file `./src/main/YourProgram.ts`.

Add `test` script to `package.json`:
```
  "scripts": {
    "build": "tsc",
    "pretest": "npm run build",
    "test": "node dist/test/EntryPoint"
  }
```

Run:
```shell script
% npm test
```
