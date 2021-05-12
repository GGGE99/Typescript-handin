import { Router } from "express"
const router = Router();
import { ApiError } from "../errors/errors"
import facade from '../facades/nameFacade'
const fetch = require('node-fetch')

router.get('/:name', async (req, res, next) => {
    const name = req.params.name
    const urls = [
        "https://api.genderize.io?name=" + name,
        "https://api.nationalize.io?name="+ name,
        "https://api.agify.io?name="+ name]

    // console.log(await facade.get_info("Https://api.genderize.io?name=ivan"))

    let genderize: any, nationalize: any, agify: any
    [genderize, nationalize, agify] = await Promise.all(urls.map(url => facade.get_info(url)))
    const retObj = {
        gender: genderize.gender,
        country: nationalize.country[0].country_id,
        age: agify.age
    }
    res.json(retObj)
})

export default router