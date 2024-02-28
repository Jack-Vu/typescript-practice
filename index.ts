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

// homework 02/27
// Task 1: Define a TypeScript Interface
// Create an interface Car with properties make (string), model (string), and year (number).
// Then, create a variable myCar of type Car and assign it some values.

interface Car {
  make: string;
  model: string;
  year: number;
}

const myCar: Car = {
  make: "Nissian",
  model: "370z",
  year: 2015,
};

// Task 2: Function with TypeScript Types
// Write a TypeScript function named calculateArea that takes two parameters, length and width (both numbers), and returns the area of a rectangle.
// Make sure the function explicitly specifies the return type.

const calculateArea = (length: number, width: number): number => {
  return length * width;
};

// Task 3: Union Type for Payment Status
// Define a type PaymentStatus that can take the values 'pending', 'completed', or 'failed'.
// Then, create a function processPayment that takes a PaymentStatus and prints a message based on the status.

type PaymentStatus = "pending" | "completed" | "failed";

const processPayment = (paymentStatus: PaymentStatus): void => {
  switch (paymentStatus) {
    case "pending":
      console.log("This payment is pending.");
      break;
    case "completed":
      console.log("This payment was completed.");
      break;
    case "failed":
      console.log("This payment has failed, please try again.");
      break;
  }
};

const currentStatus: PaymentStatus = "failed";
processPayment(currentStatus);
// Task 4: Interface Inheritance
// Create an interface Employee with properties name (string) and id (number).
// Then, extend this interface to create another interface Manager that adds an additional property teamSize (number).
// Create a variable of type Manager and assign it some values.

interface Employee {
  name: string;
  id: number;
}

interface Manager extends Employee {
  teamSize: number;
}

const teamManager: Manager = {
  name: "Lead Manager",
  id: 1,
  teamSize: 3,
};
