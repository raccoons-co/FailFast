/**
 * © 2023 Raccoons. Developing a simple way to change.
 *
 * The library provides an `EntryPoint` to `@Test`-driven development discipline practice.
 * You can run `@Test`-methods and `@Log` it with annotations for your TypeScrip prose.
 *
 * @example
 * ```ts
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
import Precondition from "./bugeye/ethics/Precondition"
import NullPointerException from "./bugeye/ethics/NullPointerException";

export {
    Immutable,
    Log,
    Test,
    CleanWayBuilder,
    BrainException,
    Brain,
    Precondition,
    NullPointerException
}
