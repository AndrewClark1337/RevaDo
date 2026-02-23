"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function frozen(constructor) {
    console.log("This class is frozen: ", constructor.name);
    Object.freeze(constructor);
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        if (!descriptor) {
            throw new Error("@enumerable decorator requires a descriptor");
        }
    };
}
let Greeter = class Greeter {
    name;
    constructor(name) {
        console.log("Constructor was called");
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
__decorate([
    enumerable(true)
], Greeter.prototype, "greet", null);
Greeter = __decorate([
    frozen
], Greeter);
let g = new Greeter("Bill");
g.greet();
console.log("Enumerable: ");
for (let prop in g) {
    console.log(prop);
}
//# sourceMappingURL=decorators.js.map