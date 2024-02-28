let message: string = "Hello World!";
// console.log(message);

let age: number = 31;
// console.log(age);

let isStudent: boolean = true;
// console.log(isStudent);

const names: string[] = ["Alice", "Bob", "Charlie"];
// console.log(names);

// we are explicitly stating the type in the examples above

const randomName = "Alice";
// randomName.map() won't allow this to happen when compiled (compile time error)
// instead of js only when you are running it will you get an error (runtime error)

// objects
// type inference means typescript know what the type of data you are assigning to the variable
// such as name being string and age being a number below
const person = {
  name: "Jack",
  age: 31,
};

// in ts you can't add props into the object or like you could in js you would need to spread it into a new variable

// person.gender = "Male"; this causes an error in ts but is allowed in js to do this properly you would do this
const anotherPerson = {
  ...person,
  gender: "Male",
};
// console.log(person);
// console.log(anotherPerson);

interface Person {
  name: string;
  age: number;
}

let person1: Person;
person1 = {
  name: "John",
  age: 21,
};

// interface enforces variable types to be explicitly what you state them as

interface ExtendedPerson extends Person {
  gender: string;
}

const anotherPerson1: ExtendedPerson = {
  ...person,
  gender: "Male",
};

// an object array using explicit typing
const people: Person[] = [person, person1, { name: "Murad", age: 31 }];

// type versus interface
type Person1 = {
  name: string;
  age: number;
};

// intersection type but is harder to read then interface
type ExtendedPerson1 = Person & {
  gender: string;
};

// union type
type Gender = "male" | "female" | "other";

// enforces that gender can only be the types listed above
interface Person2 {
  name: string;
  age: number;
  gender: Gender;
}

const personPrint: Person2 = {
  name: "Jack",
  age: 25,
  gender: "male",
};

// Explicit typing for function and return types
// allows for safer functionality and making sure the data is coming in correctly instead of needing null checks
// also explicity saying that this function is has a void return type
// v1
const printPersonDetails = (input: Person2): void => {
  console.log(`${input.name} is ${input.age} years old ${input.gender}`);
};

printPersonDetails(personPrint);

// v2
type PrintDetailsFunctionType = (input: Person2) => void;
const printPersonDetailsV2: PrintDetailsFunctionType = (person) => {
  console.log(`${person.name} is ${person.age} years old ${person.gender}`);
};

printPersonDetailsV2(personPrint);
// helps enforce input and out put by requiring the variables to be a specific type and have the return be a specific type
const addition = (a: number, b: number): number => {
  return a + b;
};

addition(1, 9);
