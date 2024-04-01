// Typescript is a strongly typed programming language that builds on JS, giving you better tooling at any scale
// It adds optional static typing in JS which can help you catch errors early through a type system and rich IDE support

// in your ts project you will have a tsconfig.json in your project root to configure ts options

// basic types
let isDone: boolean = false;
let age1: number = 42;
let userName: string = "Alice";

// array and tuples
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10]; // Tuple type

// enum and any types
let scores: number[] = [100, 99, 95];
let response: [string, number] = ["Success", 200];

// Defining interfaces
// interfaces in ts are used to define the structure of an object specifying the expected properties and their types
// they are particularly useful for React component props and state

interface User {
  name: string;
  age: number;
}

// Function with typed parameters and return type
function greet(user: User) {
  console.log("Hello, " + user.name);
}

interface GreetingProps {
  name: string;
}

//   const Greeting: React.FC<GreetingProps> = ({ name: string }) => (
//     <div>Hello, {name}!</div>

// Type Aliases allow you to create a new name for a type and are very versatile and can include primitive types, unions, tuples, and any other types that you'd define

type Point = {
  x: number;
  y: number;
};

function draw(point: Point) {
  // Implementation
}

// using type aliases with union
type ID = string | number;

function fetchResource(id: ID) {
  // Fetch resource using the ID
}

// interfaces vs type aliases
// they may often serve similar purposes there is a key difference
// Extensibility: interfaces are extendable, allowing you to add new properties over time through declaration merging
// Extensibility: type aliases cannot be extended in the same way
// Unions and intersections: type aliases can define union and intersection types providing more flexibility in some scenarios

interface ButtonProps {
  label: string;
  onClick: () => void;
}

//   const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
//     <button onClick={onClick}>{label}</button>
//   );

type Operation = 'add' | 'subtract';
 
function calculate1(operation: Operation, a: number, b: number): number {
  return operation === 'add' ? a + b : a - b;
}

// Choosing between an interface and a type alias
// for a given use case in your application decide whether an interface or type alias is more appropriate and explain why?
// if you're defining the shape of an object that might be extended by others (a library of components), an interface is preferable for its extensibility
// for a function parameter that might accept several types a type alias with a union type would be more suitable