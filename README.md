# FailFast
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/failfast/tree/develop.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/failfast/tree/develop)

FailFast is the TypeScript annotation to support Test-driven development discipline.

Install library with
```shell
% npm install @raccoons-co/failfast
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
import {Test} from "@raccooons-co/failfast";

export default class YourTest {
    @Test
    public nothing() {
        console.log("Nothing");
    }

    @Test
    public else() {
        console.log("Else");
    }
    @Test
    public matters() {
        console.log("Matters");
    }
}
```

Run `failfast` with `package.json` script:
```
  "scripts": {
    "build": "tsc",
    "pretest": "npm run build",
    "test": "node lib/test/EntryPoint"
  }
```
