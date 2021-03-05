const fetch = require('node-fetch')
const now = require("performance-now")

const URL = "https://swapi.dev/api/people/";

function fetchPerson(url) {
    return fetch(url).then(res => res.json())
    //Complete this function
}
(async function printNames() {
    console.log("Before");
    var start = now()
    const person1 = fetchPerson(URL + '1');
    const person2 = fetchPerson(URL + '2');
    const persons = await Promise.all([person1, person2])
    var end = now()
    console.log((end - start).toFixed(3))
    console.log(persons[0].name);
    console.log(persons[1].name)
    console.log("After all");
})()
