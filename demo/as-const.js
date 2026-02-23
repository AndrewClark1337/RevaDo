"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const prevents reassignment, but not using methods that modify the array
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);
const numsConst = [1, 2, 3];
//as const prevents even using methods that modify the array, making it fully immutable
//numsConst.push(4); // Error: Property 'push' does not exist on type 'readonly [1, 2, 3]'.
const comments = ["Love this!", "Great job!", "Needs improvement."];
//# sourceMappingURL=as-const.js.map