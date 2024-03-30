// TypeScript => offers all features of javascript + TypeScript type system.
// A variable or a function that is declared type is not "void", "undefined" or "any" must have a value.
// Main TypeScript two errors => 1) run time errors. 2) compile-time errors (none expected failures).
// TypeScript can catch alot of typos. => errors in the spelling.
// Types for tooling =>  autocompletion.
// Every day Types (the primitives) => 1) string  2) number 3) boolean.
// Type definition is after the annotation symbol.
// Array type => string[] or Array<string> , [number] => array on only one number.
// Type "any" => a special type that represents a value of any type.
// Anonymous functions => the parameters of that function are automatically given types.
// Object types => This refers to any JavaScript value with properties.
// Optional type => ?: we can mark those properties as optional by adding a question mark (?) to the end of their names.
// Union types => A union type is a type formed from two or more other types like (string | number),

export interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "alii",
  age: 5,
};

function getAdmin(): User {
  return {
    age: 5,
    name: "gigii",
  };
}

function greet(a: string, b: number, c: boolean, d: Array<string>) {
  return `${a} Omar this is number ${b} ${c} ${d}!!`;
}

console.log(greet("hello", 2, true, ["right"]));
console.log(getAdmin());
console.log(user.name);
console.log(user.age);


// Explicit type annotations
let x: number = 10;

x = 50;

let userName: string = "gii";

userName = "hager";

let isStudent: boolean = true;

isStudent = false;


// Object Type using interface
interface MyObj {
  name: string;
  age: number;
  isActive: boolean;
}

let studentOne: MyObj = {
  name: "gii",
  age: 24,
  isActive: true,
};

let studentTwo: MyObj = {
  name: "omar",
  age: 30,
  isActive: true,
};

// Array Type
let arr : number[] = [1,2,3,4]

let arr2 : Array<number> = [5,6,7,8]

arr2.push(9);

// Any Type
let v : any = 5;

v = "gii"

v = true


// Function Type
function sum (x: number, y: number) : number {
    return x + y
}

console.log(sum(6,6));

// Type inference in TypeScript
let num = 5; 
let str = 'omar';

let res = sum(8,8)

console.log(res);

let myArr : Array<number> = []

myArr.push(4)
