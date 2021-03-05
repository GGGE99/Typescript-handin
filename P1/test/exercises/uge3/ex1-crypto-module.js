const crypto = require('crypto');

const myPromise = (size) => new Promise(function (resolve, reject) {
  crypto.randomBytes(size, (err, buffer) => {
    if (err) {
      return reject(new Error("UPPPPPPPPS"))
    }
    resolve(buffer.toString('hex'));
  });
});


const getSecureRandoms = (async (sizes) => {
  let promisese = []
  sizes.forEach(size => {
    promisese.push(myPromise(size))
  })
  return Promise.all(promisese)
  console.log(res)
})

module.exports = getSecureRandoms;