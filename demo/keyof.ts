type User ={
    name: string,
    age: number
}

type UserKeys = keyof User;

function getField(user: User, key: UserKeys) {
    return user[key];
}
let user: User = {name: "Alice", age: 30};
console.log(getField(user,'name'));

function printValue<T>(obj: T, key: keyof T) {
    console.log(obj[key]);
}
printValue(user, 'age');



//adds logging functionality to a class
//   @Logger