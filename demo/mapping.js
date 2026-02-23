"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Genericworker {
    product;
    constructor(product) {
        console.log('Generic worker is working with the type $(typeof product)');
        this.product = product;
    }
}
const stringWorker = new Genericworker("This is a string!");
const numberWorker = new Genericworker(50);
//# sourceMappingURL=mapping.js.map