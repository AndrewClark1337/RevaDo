"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getField(user, key) {
    return user[key];
}
let user = { name: "Alice", age: 30 };
console.log(getField(user, 'name'));
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(user, 'age');
//adds logging functionality to a class
//   @Logger
//# sourceMappingURL=keyof.js.map