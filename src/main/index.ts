/**
 * © 2023 Raccoons. Developing a simple way to change.
 *
 * The library provides an EntryPoint to @Test-driven development discipline practice.
 *
 * @Test case annotation will call your class method to test the correct
 * behaviour/functionality, features of an application.
 *
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
import CleanWayBuilder from "./CleanWayBuilder";
import BrainException from "./bugeye/eventbus/common/BrainException";

export {
    Test,
    TestClass,
    CleanWayBuilder,
    BrainException
}
