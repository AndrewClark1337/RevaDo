type Book={
    name: string,
    author: string,
    sales: number
}

let partialBook: Partial<Book> = {
    name: "The Martian",
    author: "Andy Weir"
};
let pickBook: Pick<Book, "name" | "author"> = {
    name: "The Hobbit",
    author: "J.R.R. Tolkien"
};
let omitBook: Omit<Book, "author"> = {
    name: "Harry Potter",
    sales: 120000000
};
console.log(partialBook);
console.log(pickBook);
console.log(omitBook);

interface CatInfo{
    age: number;
    food: string;
    color: string;
}
type CatName = "smeagol" | "gollum" ;
const cats: Record<CatName, CatInfo> = {
    smeagol:{age:3, color:"black", food:"fish"},
    gollum:{age:5, color:"gray", food:"chicken"}
}