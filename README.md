# Cleanway
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)

`@Test` annotation for TypeScript to support a test-driven development discipline.
```
NOTE: Decorators are an experimental feature that may change in future releases.
```

Install library with
```shell
% npm install @raccoons-co/cleanway
```

Implement `YourTest.ts`:
```
import {Test} from "@raccooons-co/cleanway";

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
        // For your code.
    }
}
```

Implement your main `EntryPoint.ts`:
```
import YourTest from "./YourTest";

try {
    new YourTest();
} catch(exception) {
    console.log(exception);
}
```

Run `cleanway` with `package.json` script:
```
  "scripts": {
    "build": "tsc",
    "pretest": "npm run build",
    "test": "node lib/test/EntryPoint"
  }
```
