// @strict: true
// @noEmit: true

// function f1<T>(x: T): T {
//     return x;
// }

// function f2<T>(x: T): T {
//     if (x) {
//         return x;
//     }
//     return x;
// }

// function f3<T>(x: T, y: T): T {
//     return y;
// }

// interface A {
//     1: number;
//     2: string;
// }

// function f4<T extends 1 | 2>(x: T): A[T] {
//     if (x === 1) {
//         // return "one";
//         return 0;
//     }
//     else {
//         return false;
//     }
// }

// interface One {
//     a: "a";
//     b: "b";
//     c: "c";
//     d: "d";
// }

// interface Two {
//     a: "a";
//     b: "b";
//     e: "e";
//     f: "f";
// }

// interface Three {
//     a: "a";
//     c: "c";
//     e: "e";
//     g: "g";
// }

// interface Four {
//     a: "a";
//     d: "d";
//     f: "f";
//     g: "g";
// }

// function f10<T extends 1 | 2 | 3 | 4>(x: T): T extends 1 ? One : T extends 2 ? Two : T extends 3 ? Three : Four {
//     if (x === 1 || x === 2) {
//         // return { a: "a", b: "b", c: "c", d: "d", e: "e", f: "f" };
//         return { a: "a" };
//     }
//     // Excess property becomes a problem with the change,
//     // because we now check assignability to a narrower type...
//     return { a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g" };
// }

// interface Animal {
//     name: string;
// }

// interface Dog extends Animal {
//     bark: () => string;
// }

// declare function isDog(x: Animal): x is Dog;
// declare function doggy(x: Dog): number;
// function f12<T extends Animal>(x: T): T extends Dog ? number : string {
//     if (isDog(x)) { // `x` has type `T & Dog` here
//         return doggy(x); // Should work
//     }
//     return ""; // Should not work because we can't express "not a Dog" in the type system
// }

// function f<Entry extends { [index: string]: number | boolean }, EntryId extends keyof Entry>(entry: EntryId): Entry[EntryId] {
//     const entries = {} as Entry;
//     return entries[entry];
// }

// interface F {
//     a: "a",
//     b: "b",
// }

// declare function takesA(x: "a"): number;
// function f<T extends keyof F>(x: T) {
//     if (x === "a") {
//         takesA(x); // we narrow x
//         x; // we don't narrow x in `getNarrowableTypeForReference`, therefore we don't narrow it at all
//     }
// }

// declare function takeA(val: 'A'): void;
// export function bounceAndTakeIfA<AB extends 'A' | 'B'>(value: AB): AB {
//     if (value === 'A') {
//         takeA(value);
//         takeAB(value);
//         return value;
//     }
//     function takeAB(val: AB): void {}
// }

// export function bbb<AB extends "a" | "b">(value: AB): "a" {
//     if (value === "a") {
//         return value;
//     }
// }

// declare function takeA(val: 'A'): void;

// export function bounceAndTakeIfA<AB extends 'A' | 'B'>(value: AB): AB {
//     if (value === 'A') {
//         takeA(value);
//         return value;
//     }
// }

// function conditionalProducingIf<LeftIn, RightIn, LeftOut, RightOut, Arg extends LeftIn | RightIn>(
//     arg: Arg,
//     cond: (arg: LeftIn | RightIn) => arg is LeftIn,
//     produceLeftOut: (arg: LeftIn) => LeftOut,
//     produceRightOut: (arg: RightIn) => RightOut):
//     Arg extends LeftIn ? LeftOut : RightOut
// {
//     type OK = Arg extends LeftIn ? LeftOut : RightOut;
//     if (cond(arg)) {
//         return produceLeftOut(arg);
//     } else {
//         return produceRightOut(arg as RightIn) as OK;
//     }
// }

// class Unnamed {
//     root!: { name: string };
//     name<T extends string>(name?: T): T extends string ? this : string {
//         if (typeof name === 'undefined') {
//             return this.root.name;
//             // return this; // Error; as it should
//         }
//         this.root.name = name;
//         name; // type `T < string` here
//         return this; // What's going on here??
//     }
// }

// interface A {
//     data: number,
// }

// interface B {
//     other: string,
// }

// declare function abf(): A | B;
// declare const eitherab: A | B;

// function wrong<T extends boolean>(arg?: T): T extends true ? void : ReturnType<typeof abf> {
//     if (arg) {
//         return undefined;
//     }
//     return eitherab;
// }


// interface A {
//     1: number;
//     2: string;
//     3: string;
// }

// function trivial<T extends 1 | 2 | 3>(x: T): A[T] {
//     if (x !== 1) {
//         return x === 2 ? "" : `${x}`;
//     }
//     else {
//         return 0;
//     }
// }

function conditional<T extends boolean>(x: T): T extends true ? 1 : 2 {
    return x ? 1 : 2;
}

function contextualConditional<T extends "a" | "b">(x: T): T extends "a" ? "a" : number {
    return x === "a" ? x : parseInt(x);
}
