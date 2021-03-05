"use strict";
const myFunc = (s1, s2, s3) => { return [s1, s2, s3]; };
const myFuncUp = (s1, s2, s3) => { return [s1.toUpperCase(), s1.toUpperCase(), s1.toUpperCase()]; };
console.log(myFunc("sdas", "sadads", "asdasd"));
console.log(myFuncUp("sdas", "sadads", "asdasd"));
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
};
f2(myFunc);
//# sourceMappingURL=Interfaces-2.js.map