const fetch = require('node-fetch')

const URLs = [
    'https://jsonplaceholder.typicode.com/photos?albumId=1',
    'https://jsonplaceholder.typicode.com/photos?albumId=3',
    'https://jsonplaceholder.typicode.com/photos?albumId=5',
    'https://jsonplaceholder.typicode.com/photos?albumId=7',
    'https://jsonplaceholder.typicode.com/photos?albumId=9'
]

const get_info = async (url, amount) => new Promise(async (resolve, reject) => {
    try{
    var data = await fetch(url).then(res => res.json())
    data = data.filter(e => e.title.split(' ').length <= amount)
    data = data.map(e => ({ id: e.id, title: e.title }))
    } catch(err) {
        return reject(err)
    } finally {
        resolve(data)
    }
})


const tester = async(amount) => {
    const res = await Promise.all(URLs.map(url => get_info(url, amount)))
    return res.reduce((acc, current) => [...acc, ...current])
}

module.exports = tester
