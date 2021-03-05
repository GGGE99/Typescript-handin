
interface IMyFunc {
    (s1:string, s2:string, s3:string): Array<string>
}

const myFunc = (s1:string, s2:string, s3:string): Array<string> => {return [s1, s2, s3]}
const myFuncUp = (s1:string, s2:string, s3:string): Array<string> => {return [s1.toUpperCase(), s1.toUpperCase(), s1.toUpperCase()]}
console.log(myFunc("sdas", "sadads","asdasd"))
console.log(myFuncUp("sdas", "sadads", "asdasd"))


let f2 = function logger(f1: IMyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["a", "b", "c"];
    console.log(f1(a,b,c));
}

f2(myFunc)
