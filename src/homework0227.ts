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
  make: "Nissan",
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

console.log("made changes");
