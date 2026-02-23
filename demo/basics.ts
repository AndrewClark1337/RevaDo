let myString : string;
myString="Some string value";

const stringType: string = "This is your basic string";
const numberType: number = 10;
const numberType2: number =10.2;
const booleanType: boolean = true;

const couldBeAnything: any = "This can be any type of data"
if (typeof couldBeAnything == "string")
{
    console.log(couldBeAnything.toUpperCase());

}
console.log(couldBeAnything.toUpperCase());


const unknownValue : unknown = 70;
if (typeof unknownValue=="number")
{
    console.log(unknownValue.toLocaleString())
}

const user:{id: number, username: string, password: string} ={
    id:20,
    username: "somethingCool",
    password: "true"
}




type Pet= "dog" | "cat" | "fish" | "parrot";
let specifiedPet: "dog" | "cat" | "fish" = "cat";
let typedPet : Pet = "parrot";

type PossibleTypes = string | number;
let aString: PossibleTypes="Some string value";
let aNumber: PossibleTypes =10
interface User {
    id: number,
    username: string,
    password: string
}
const newUser: User = {id:2, username: "whatever", password: "whatever"};
const newUser2: User={id:3,username:"something",password:"secure" }


type Product = string;
type orderSize= number;
type Price = number;
type PurchaseOrder=[Product,orderSize,Price];
let order1:[Product,orderSize,Price] =["apple",5,1];
let order2:PurchaseOrder=["orange",2,.75];

enum FoodCategory{
    FRUIT="fruit",
    MEAT ="meat"
}
let myCategory: FoodCategory=FoodCategory.FRUIT;

enum Grade{
    PERFECT=100,
    GOOD=150,
    OK,
    POOR,
    BAD
}