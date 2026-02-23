"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function print_(x) {
    if (typeof x === "string") {
        console.log(x.toUpperCase());
    }
    else {
        console.log(x);
    }
}
print_("hello");
print_(42);
//# sourceMappingURL=typeguards.js.map