/* eslint-disable no-shadow */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-self-compare */

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
// let hBigint: bigint = 100; error: bigint type cannot be assigned to 100.

/* string */

let aString = 'hello';
var bString = 'typescript';
const cString = '!';
let dString = aString + ' ' + bString + cString;
let eString: string = 'zoom';
let fString: 'john' = 'john';
// let gString: 'john' = 'zoe'; error: gString typs is 'john'

/* symbol */

let aSymbol = Symbol('a'); // symbol
let bSymbol: symbol = Symbol('b'); // symbol
var cSymbol = aSymbol === bSymbol; // boolean
// let d = a + 'x'; error: + operator not allow
const eSymbol = Symbol('e');
const fSymbol: unique symbol = Symbol('f');
// let gSymbol: unique symbol = Symbol('g'); error: unique symbol is always `const`
let hSymbol = eSymbol === eSymbol;
// let gSymbol = eSymbol === fSymbol; unique symbol is always not overlap

/* object */

let aObject: object = {
  b: 'x',
}; // { b: string }

let bObject = {
  c: {
    d: 'f',
  },
}; // { c: f { d: string } }

let cObject: {
  firstName: string;
  lastName: string;
} = {
  firstName: 'john',
  lastName: 'barrowman',
};

class Person {
  constructor(
    public firstName: string, // public eqaul this.firstName = firstName
    public lastName: string,
  ) {}
}

cObject = new Person('matt', 'smith');

let dObject: { b: string };
// dObject = {}; error: { b: string } Type b does not have properties required
// dObject = { b: 1, c: 2 }; error: b property type is not number, c is not contain type

let eObject: {
  b: number;
  c?: string;
  [key: number]: boolean;
};

eObject = { b: 1 };
eObject = { b: 1, c: undefined };
eObject = { b: 1, 10: true };
eObject = { b: 1, 10: true, 20: false };
// eObject = { 10: true }; error: b is not contain object
// eObject = { b: 1, 33: 'red' }; error: boolean type cannot be assigned to string type.

let user: {
  readonly firstName: string;
} = { firstName: 'abby' };

user.firstName; // string
// user.firstName = 'abby with an e'; error: firstName is readonly

let danger: {};
danger = {};
danger = { x: 1 };
danger = [];
danger = 2;

/* typealias */
type Age = number;
type TypePerson = {
  name: string;
  age: Age;
};

let age: Age = 30;
let driver: TypePerson = {
  name: 'James',
  age,
};

type Color = 'red';
// type Color = 'blue'; error: duplicate type

let x = Math.random() < 0.5;

if (x) {
  type Color = 'blue';
  let aType: Color = 'blue';
} else {
  let bType: Color = 'red';
}

type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDpg = Cat & Dog;

// Cat
let catOrDogorBoth: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true,
};

// Dog
catOrDogorBoth = {
  name: 'Domino',
  barks: true,
  wags: true,
};

// Both
catOrDogorBoth = {
  name: 'Domino',
  barks: true,
  purrs: true,
  wags: true,
};

// Cat and Dog
let catAndDog = {
  name: 'Domino',
  barks: true,
  purrs: true,
  wags: true,
};

function trueOrNull(isTure: boolean) {
  if (isTure) {
    return 'true';
  }
  return null;
}

type Returns = string | null;

function stringOrNumber(a: string, b: number) {
  return a || b;
}

/* Array */
let aArray = [1, 2, 3];
var bArray = ['a', 'b '];
let cArray: string[] = ['a'];
let dArray = [1, 'a'];
const eArray = [2, 'b'];

let fArray = ['red'];
fArray.push('blue');
// fArray.push(true); error: boolean type cannot be assigned to string type.

let gArray = [];
gArray.push(1);
gArray.push('red');

let hArray: number[] = [];
hArray.push(1);
// hArray.push('red'); string type cannot be assigned to number type.

let d = [1, 'a'];
d.map((_) => {
  if (typeof _ === 'number') {
    return _ * 3;
  }
  return _.toUpperCase();
});

function buildArray() {
  let a = [];
  a.push(1);
  a.push('x');
  return a;
}

let myArray = buildArray(); // (string | number)[]
// myArray.push(true); error: boolean type cannot be assigned to (string | number) type.
