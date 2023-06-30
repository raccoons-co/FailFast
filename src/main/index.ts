/**
 * © 2023 Raccoons. Developing a simple way to change.
 *
 * The library provides an EntryPoint to @Test-driven development discipline practice.
 **
 * @example
 * ```typescript
 * @TestClass
 * export default class YourTest {
 *
 *     @Test
 *     public nothing() {
 *         assert.ok("But your assertions here.");
 *     }
 * }
 * ```
 *
 * @packageDocumentation
 */

import Test from "./Test";
import TestClass from "./TestClass";
import AfterEach from "./AfterEach";
import CleanWayBuilder from "./CleanWayBuilder";
import BrainException from "./bugeye/eventbus/common/BrainException";

export {
    Test,
    TestClass,
    AfterEach,
    CleanWayBuilder,
    BrainException
};
