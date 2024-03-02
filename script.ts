// TypeScript => offers all features of javascript + TypeScript type system.
// A variable or a function that is declared type is not "void" or "any" must have a value.
// Main TypeScript two errors => 1)-run time errors. 2)-compile-time errors (none expected failures).
// TypeScript can alot of typos. => errors in the spelling.
// Types for tooling =>  autocompletion.
// Every day Types (the primitives) => 1)-string  2)-number 3)-boolean.
// type definition is after the annotation symbol.



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

function greet(a: string, b: number, c: boolean) {
  return `${a} Omar this is number ${b} ${c}!!`;
}

console.log(greet("hello", 2, true));
console.log(getAdmin());
console.log(user.name);
console.log(user.age);
