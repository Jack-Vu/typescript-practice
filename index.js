var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var message = "Hello World!";
// console.log(message);
var age = 31;
// console.log(age);
var isStudent = true;
// console.log(isStudent);
var names = ["Alice", "Bob", "Charlie"];
// console.log(names);
// we are explicitly stating the type in the examples above
var randomName = "Alice";
// randomName.map() won't allow this to happen when compiled (compile time error)
// instead of js only when you are running it will you get an error (runtime error)
// objects
// type inference means typescript know what the type of data you are assigning to the variable
// such as name being string and age being a number below
var person = {
    name: "Jack",
    age: 31,
};
// in ts you can't add props into the object or like you could in js you would need to spread it into a new variable
// person.gender = "Male"; this causes an error in ts but is allowed in js to do this properly you would do this
var anotherPerson = __assign(__assign({}, person), { gender: "Male" });
var person1;
person1 = {
    name: "John",
    age: 21,
};
var anotherPerson1 = __assign(__assign({}, person), { gender: "Male" });
// an object array using explicit typing
var people = [person, person1, { name: "Murad", age: 31 }];
var personPrint = {
    name: "Jack",
    age: 25,
    gender: "male",
};
// Explicit typing for function and return types
// allows for safer functionality and making sure the data is coming in correctly instead of needing null checks
// also explicity saying that this function is has a void return type
// v1
var printPersonDetails = function (input) {
    console.log("".concat(input.name, " is ").concat(input.age, " years old ").concat(input.gender));
};
printPersonDetails(personPrint);
var printPersonDetailsV2 = function (person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old ").concat(person.gender));
};
printPersonDetailsV2(personPrint);
// helps enforce input and out put by requiring the variables to be a specific type and have the return be a specific type
var addition = function (a, b) {
    return a + b;
};
addition(1, 9);
var myCar = {
    make: "Nissian",
    model: "370z",
    year: 2015,
};
// Task 2: Function with TypeScript Types
// Write a TypeScript function named calculateArea that takes two parameters, length and width (both numbers), and returns the area of a rectangle.
// Make sure the function explicitly specifies the return type.
var calculateArea = function (length, width) {
    return length * width;
};
var processPayment = function (paymentStatus) {
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
var currentStatus = "failed";
processPayment(currentStatus);
var teamManager = {
    name: "Lead Manager",
    id: 1,
    teamSize: 3,
};
