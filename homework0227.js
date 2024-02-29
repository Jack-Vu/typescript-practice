"use strict";
// homework 02/27
// Task 1: Define a TypeScript Interface
// Create an interface Car with properties make (string), model (string), and year (number).
// Then, create a variable myCar of type Car and assign it some values.
const myCar = {
    make: "Nissan",
    model: "370z",
    year: 2015,
};
// Task 2: Function with TypeScript Types
// Write a TypeScript function named calculateArea that takes two parameters, length and width (both numbers), and returns the area of a rectangle.
// Make sure the function explicitly specifies the return type.
const calculateArea = (length, width) => {
    return length * width;
};
const processPayment = (paymentStatus) => {
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
const currentStatus = "failed";
processPayment(currentStatus);
const teamManager = {
    name: "Lead Manager",
    id: 1,
    teamSize: 3,
};
