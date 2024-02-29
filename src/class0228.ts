// interface PersonalInfo {
//   firstName: string;
//   lastName: string;
//   dob: Date;
//   ssn: number;
// }

// const printPersonalInfo = (info: PersonalInfo) => {
//   console.log("First name:", info.firstName);
//   console.log("Last name:", info.lastName);
//   console.log("Date of Birth:", info.dob);
//   console.log("SSN:", info.ssn);
// };

// const someOtherInfo = {
//   firstName: "Jack",
//   lastName: "Vu",
//   dob: new Date(),
//   ssn: 123456789,
//   age: 2,
//   gender: "male",
// };

// printPersonalInfo(someOtherInfo);
// the above function is able to do this due to structural _____
// as long as the value meets the minimum requirements of personal info you can call it normal
// even if you have more props then what was expected in the function for info

// let dob: any; // loses the whole purpose of ts only use when necessary very unique use cases for this not recommended
// let dob: string | Date;
// dob = new Date();
// dob = "01/01/2021";

// type PersonalInfo = {
//   firstName: string;
//   lastName: string;
//   dob: Date;
//   ssn: number;
// };

// const person2: PersonalInfo = {
//   firstName: "Jane",
//   lastName: "Doe",
//   dob: new Date(),
//   ssn: 12345,
// };

// const personString = JSON.stringify(person2);

// const x: unknown = JSON.parse(personString);

// type assertion
// we do this if we are absolutely sure we know whats going in and whats going out
// const parsedPerson = x as PersonalInfo;

//------------------------------------------------------------

// null and a type or undefined and a type to this you would use union

// interface PersonV2 {
//   firstName: string;
//   lastName: string;
//   middleName: string | null | undefined;
// }

// const person3: PersonV2 = {
//   firstName: "Jone",
//   lastName: "Doe",
//   middleName: "Micheal",
// };

// const person31: PersonV2 = {
//   firstName: "Jone",
//   lastName: "Doe",
//   middleName: null,
// };

// const person32: PersonV2 = {
//   firstName: "Jone",
//   lastName: "Doe",
//   middleName: undefined,
// };

// // optional
// interface PersonV3 {
//     firstName: string;
//     lastName: string;
//     middleName?: string;
//   }

//   const person33: PersonV3 = {
//     firstName: "Jone",
//     lastName: "Doe",
//   };

enum MathOperation {
  Add = "Add",
  Subtract = "Subtract",
  Multiply = "Multiply",
  Divide = "Divide",
}

const calculate = (
  operation: MathOperation,
  x: number,
  y: number
): number | undefined => {
  switch (operation) {
    case MathOperation.Add:
      return x + y;
    case MathOperation.Subtract:
      return x - y;
    case MathOperation.Multiply:
      return x * y;
    case MathOperation.Divide:
      return x / y;
  }
};

console.log(calculate(MathOperation.Add, 10, 5));
