const getSecureRandoms = require('./ex1-crypto-module')
const crypto = require('crypto');

const opgaveA = (cb) => {
    let obj = {
        title: 'hi',
        randoms: []
    }
    setTimeout(() => {
        crypto.randomBytes(48, (err, buffer) => obj.randoms.push(buffer.toString('hex')))
        setTimeout(() => {
            crypto.randomBytes(40, (err, buffer) => obj.randoms.push(buffer.toString('hex')))
            setTimeout(() => {
                crypto.randomBytes(32, (err, buffer) => obj.randoms.push(buffer.toString('hex')))
                setTimeout(() => {
                    crypto.randomBytes(24, (err, buffer) => obj.randoms.push(buffer.toString('hex')))
                    setTimeout(() => {
                        crypto.randomBytes(16, (err, buffer) => obj.randoms.push(buffer.toString('hex')))
                        setTimeout(() => {
                            crypto.randomBytes(8, (err, buffer) => obj.randoms.push(buffer.toString('hex')))
                            setTimeout(() => {
                                cb(obj)
                            }, 0)
                        }, 0)
                    }, 0)
                }, 0)
            }, 0)
        }, 0)
    }, 0)
}

const makeSecureRandomP = () => {
    getSecureRandoms([48, 40, 32, 24, 16, 8]).then(res => {
        let obj = { title: '6 Secure Randoms', res }
        console.log('_________________Plain_________________')
        console.log(obj)
    }).catch((err) => console.log(err))
}

const makeSecureRandomA = async() => {
    let res = await getSecureRandoms([48, 40, 32, 24, 16, 8])
    let obj = { title: '6 Secure Randoms', res }
    console.log('_________________AWAIT_________________')
    return obj
}

const randoms = (async() => {
    opgaveA((res) => {
        console.log('_________________A_________________')
        console.log(res)
    })
    // makeRandomBytes()
    makeSecureRandomP()

    console.log(await makeSecureRandomA())
})()

module.exports.makeSecureRandomA = makeSecureRandomA