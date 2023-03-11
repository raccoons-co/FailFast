/**
 * © 2023 Raccoons. Developing a simple way to change.
 *
 * The library provides an `EntryPoint` to `@Test`-driven development discipline practice.
 * You can run `@Test`-methods and `@Log` it with annotations for your TypeScrip prose.
 *
 * @example
 * ```ts
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

import Brain from "./bugeye/eventbus/Brain";
import BrainException from "./bugeye/eventbus/common/BrainException";
import CleanWayBuilder from "./CleanWayBuilder";
import Log from "./Log";
import Test from "./Test";
import Immutable from "./Immutable";

export {
    Brain,
    BrainException,
    CleanWayBuilder,
    Log,
    Test,
    Immutable
}
