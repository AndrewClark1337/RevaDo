class Genericworker<T>{
    product:T;
    constructor(product: T){
        console.log('Generic worker is working with the type $(typeof product)')
        this.product=product;
    }
}
const stringWorker = new Genericworker<string>("This is a string!");
const numberWorker = new Genericworker<number>(50);

type CustomType = {prop: string}
