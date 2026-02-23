//  var = hoists declaration to the top of the module
//  let = preferred way to declare changing variables
//  const = preferred way to declare static variables

console.log(hoistedVar);
var hoistedVar="Hoisted";

console.log(hoistedVar);
let changeableVar;
console.log(changeableVar);
changeableVar="This will not hoist";
console.log(changeableVar);
const staticVar="This can't be changed";
//staticVar="This won't work";
const myObj = {prop1:"first", prop2:"second"};
myObj.prop2=2;
console.log(myObj.prop2);

function myFunction(){
    const greeting="Hello There!";
    console.log(greeting);
   // console.log(staticValue);
}
myFunction();

function outer(){
    let lex="This is in the lexical scope";
    function inner(){
        let funct="This is in the function scope";
        console.log(lex);
        console.log(funct);
    }
}
const innerFunction=outer();
inner();