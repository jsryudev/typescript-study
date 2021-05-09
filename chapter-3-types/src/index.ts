function squareOf(n: number) {
  return n * n;
}

squareOf(2);
// squareOf('2'); error: n is number type

/* any */

const aAny: any = 666; // any
const bAny: any = ['hello']; // any
const cAny = aAny + bAny; // any

/* unknown */

const aUnknown = aAny === 123; // boolean
const bUnknown: unknown = 30; // unknown
// const cUnknown = bUnknown + 100; error: bUnknown type is unknown

if (typeof bUnknown === 'number') {
  const cUnknown = bUnknown + 10;
}

/* boolean */

let aBoolean = true; // boolean
let bBoolean = false; // boolean
const cBoolean = true; // true
let dBoolean: boolean = false; // boolean
let eBoolean: true = true; // true
// let fBoolean: true = false; error: fBoolean type is true

/* number */

let aNumber = 1234; // number
var bNumber = Infinity * 0.1; // number
const cNumber = 5678;
let dNumber = aNumber < bNumber;
let eNumber: number = 100;
let fNumber: 26.268 = 26.268;
// let gNumber: 26.268 = 10; error: gNumber type is 26.268

/* bigint */

let aBigint = 1234n;
const bBigint = 5678n;
var cBigint = aBigint + bBigint;
let dBigint = aBigint < 1235;
// let eBigint = 88.5n; error: bigint is awlays integer type
let fBigint: bigint = 100n;
let gBigint: 100n = 100n;
let hBigint: bigint = 100;

/* string */

let aString = 'hello';
var bString = 'typescript';
const cString = '!';
let dString = a + ' ' + b + c;
let eString: string = 'zoom';
let fString: 'john' = 'john';
// let gString: 'john' = 'zoe'; error: gString typs is 'john'
