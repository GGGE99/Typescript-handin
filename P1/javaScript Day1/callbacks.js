let names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]

const filter = (array, cb) => {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(cb(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log("My filter:")
console.log(filter(names, (name) => name.charAt(0) === "A"))
console.log("Array filter:")
console.log(names.filter((name) => name.charAt(0) === "A"))
console.log("")

const map = (array, cb) => {
    let newArray = []
    for(let i = 0; i < array.length; i++){
            newArray.push(cb(array[i]))
    }
    return newArray
}

console.log("My map:")
console.log(map(names, (name) => name.toUpperCase()))
console.log("Array map:")
console.log(names.map((name) => name.toUpperCase()))
console.log("")

//Opgave 3

Array.prototype.myMap = function(cb) {
    let newArray = []
    for(let i = 0; i < this.length; i++){
            newArray.push(cb(this[i]))
    }
    return newArray
}
 
console.log("My map:")
console.log(names.myMap((name) => name.toLowerCase()))
console.log("Array map:")
console.log(names.map((name) => name.toLowerCase()))
console.log("")

Array.prototype.myFilter = function(cb) {
    let newArray = []
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray
}

console.log("My filter:")
console.log(names.myFilter((name) => name.charAt(0) === "B"))
console.log("Array filter:")
console.log(names.filter((name) => name.charAt(0) === "B"))
console.log("")




