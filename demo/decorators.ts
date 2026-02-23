function frozen(constructor: Function) {
    console.log("This class is frozen: ", constructor.name);
    Object.freeze(constructor);

}

function enumerable(value: boolean) 
{
    return function (target: any,
         propertyKey: string,
          descriptor?: PropertyDescriptor
        )
    {
        if (!descriptor)
        {
            throw new Error("@enumerable decorator requires a descriptor");
        }
        
    }
}

@frozen
class Greeter {
    name: string;
    constructor(name: string) {
        console.log("Constructor was called");
        this.name = name;
    }
    @enumerable(true)
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}


let g = new Greeter("Bill");
g.greet();

console.log("Enumerable: ");
for(let prop in g) {
    console.log(prop);  
}