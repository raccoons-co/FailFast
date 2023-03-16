/**
 * © 2023 Raccoons. Developing a simple way to change.
 *
 * The library provides an `EntryPoint` to `@Test`-driven development
 * discipline practice.
 * The library can:
 *  - Run `@Test` case method;
 *  - `@Log` method call;
 *  - Make class instance `@Immutable`.
 *
 * @example
 * ```typescript
 * @Immutable
 * export default class YourTest {
 *
 *     @Log
 *     @Test
 *     public nothing() {
 *         // But your assertions here.
 *     }
 * }
 * ```
 *
 * @packageDocumentation
 */

import Immutable from "./Immutable";
import Log from "./Log";
import Test from "./Test";
import CleanWayBuilder from "./CleanWayBuilder";
import BrainException from "./bugeye/eventbus/common/BrainException";
import Brain from "./bugeye/eventbus/Brain";
import Strict from "./bugeye/ethic/Strict"
import NullPointerException from "./bugeye/ethic/NullPointerException";

export {
    Immutable,
    Log,
    Test,
    CleanWayBuilder,
    BrainException,
    Brain,
    Strict,
    NullPointerException
}
