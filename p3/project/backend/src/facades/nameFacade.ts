import { response } from "express"

const fetch = require('node-fetch')


function nameFacade() {
    const get_info = async (url : string) => new Promise(async (resolve, reject) => {
        try{
            const response = await fetch(url)
            var body = await response.json() 
        } catch(err) {
            return reject(err)
        } finally {
            resolve(body)
        }
    })

    return {get_info}
}

const facade = nameFacade()

export default facade
