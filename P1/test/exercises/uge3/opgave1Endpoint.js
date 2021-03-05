const http = require('http');
const getSecureRandoms = require('./ex1-crypto-module')
const getPhotos = require('./opgave4')

const makeSecureRandomA = async() => {
    let res = await getSecureRandoms([48, 40, 32, 24, 16, 8])
    let obj = { title: '6 Secure Randoms', res }
    console.log('_________________AWAIT_________________')
    return obj
}

const port = process.env.PORT || 3000

const server = http.createServer(async(req, res) => {

    if (req.url === '/') {
        res.write(`<h1>Hello World</h1>`)
        res.end()
    } else if (req.url === '/api/securerandoms') {
        let r = await makeSecureRandomA()
        res.write(`${JSON.stringify(r)}`)
        res.end()
    } else if (req.url === '/api/albumthreewords') {
        let r = await getPhotos(3)
        res.write(`${JSON.stringify(r)}`)
        res.end()
    } else if (req.url.startsWith('/api/albums/')) {
        const amount = req.url.split('/').reverse()[0]
        let r = await getPhotos(amount)
        res.write(`${JSON.stringify(r)}`)
        res.end()
    }

})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})