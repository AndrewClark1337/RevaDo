function print_(x: string | number) {
    if (typeof x === "string") {
        console.log(x.toUpperCase());
    } else {
        console.log(x);
    }
}
print_("hello");
print_(42);

type Dog ={bark: ()=>void};
type Cat = {meow: ()=>void};
function speak(animal: Dog | Cat) {
    if ("bark" in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}