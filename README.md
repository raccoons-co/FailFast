# Cleanway
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/cleanway/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/cleanway/tree/master)

Cleanway is the TypeScript annotations to support Test-driven development discipline.

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

Run `cleanway` with `package.json` script:
```
  "scripts": {
    "build": "tsc",
    "pretest": "npm run build",
    "test": "node lib/test/EntryPoint"
  }
```
