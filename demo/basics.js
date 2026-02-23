"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myString;
myString = "Some string value";
const stringType = "This is your basic string";
const numberType = 10;
const numberType2 = 10.2;
const booleanType = true;
const couldBeAnything = "This can be any type of data";
if (typeof couldBeAnything == "string") {
    console.log(couldBeAnything.toUpperCase());
}
console.log(couldBeAnything.toUpperCase());
const unknownValue = 70;
if (typeof unknownValue == "number") {
    console.log(unknownValue.toLocaleString());
}
const user = {
    id: 20,
    username: "somethingCool",
    password: "true"
};
let specifiedPet = "cat";
let typedPet = "parrot";
let aString = "Some string value";
let aNumber = 10;
const newUser = { id: 2, username: "whatever", password: "whatever" };
const newUser2 = { id: 3, username: "something", password: "secure" };
let order1 = ["apple", 5, 1];
let order2 = ["orange", 2, .75];
var FoodCategory;
(function (FoodCategory) {
    FoodCategory["FRUIT"] = "fruit";
    FoodCategory["MEAT"] = "meat";
})(FoodCategory || (FoodCategory = {}));
let myCategory = FoodCategory.FRUIT;
var Grade;
(function (Grade) {
    Grade[Grade["PERFECT"] = 100] = "PERFECT";
    Grade[Grade["GOOD"] = 150] = "GOOD";
    Grade[Grade["OK"] = 151] = "OK";
    Grade[Grade["POOR"] = 152] = "POOR";
    Grade[Grade["BAD"] = 153] = "BAD";
})(Grade || (Grade = {}));
//# sourceMappingURL=basics.js.map