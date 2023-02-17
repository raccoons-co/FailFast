# Cleanway
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)

TypeScript annotations library to support Test-driven development discipline.

Install library with
```shell
% npm install @raccoons-co/cleanway
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

Run `cleanway` with `package.json` script:
```
  "scripts": {
    "build": "tsc",
    "pretest": "npm run build",
    "test": "node lib/test/EntryPoint"
  }
```
