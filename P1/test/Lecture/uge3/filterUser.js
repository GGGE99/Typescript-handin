const {filterDirMyPromise} = require('./filterDir')
const { readdirSync } = require('fs')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

async function tester() {
    try{
        const files = await filterDirMyPromise(__dirname, '.js')
        console.log(files)
    } catch (err) {
        console.log(err)
    }
}
async function tester1() {
    const r1 = await filterDirMyPromise('./folder1', '.js')
    const r2 = await filterDirMyPromise('./folder2', '.js')
    const r3 = await filterDirMyPromise('./folder3', '.js')
    const r4 = await filterDirMyPromise('./folder4', '.js')
    const r5 = await filterDirMyPromise('./folder5', '.js')

    console.log(`${r1}, ${r2}, ${r3}, ${r4}, ${r5}, `)

}

async function tester2() {
    const r1 = filterDirMyPromise('./folder1', '.js')
    const r2 = filterDirMyPromise('./folder2', '.js')
    const r3 = filterDirMyPromise('./folder3', '.js')
    const r4 = filterDirMyPromise('./folder4', '.js')
    const r5 = filterDirMyPromise('./folder5', '.js')

    const vals = await Promise.all([r1,r2,r3,r4,r5])

    console.log(vals)

    // console.log(`${r1}, ${r2}, ${r3}, ${r4}, ${r5}, `)
}
tester2()

// tester()