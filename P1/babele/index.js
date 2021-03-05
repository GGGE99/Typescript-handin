import fetch from 'node-fetch'

function messageDelay(msg, delay) {
   return new Promise((resolve, reject) => {
       setTimeout(() => resolve(msg.toUpperCase()), delay)
   })
}

const promises = [
    messageDelay('Hi', 1300),
    messageDelay('Hi class', 700),
    messageDelay('Hello World', 1700),
    messageDelay('promises are coll', 500),
]


Promise.any(promises).then(data => console.log(data))