const expect = require("chai").expect;
import app from "../src/app";
const request = require("supertest")(app);
import nock from "nock";

describe("What to do endpoint", function () {
    before(() => {
        nock('https://api.genderize.io?name=marc')
            .get("/")
            .query({ name: "marc" })
            .reply(200, '{"name":"marc","gender":"male","probability":0.99,"count":116213}')

        nock('https://api.nationalize.io')
            .get("/")
            .query({ name: "marc" })
            .reply(200, '{"name":"marc","country":[{"country_id":"DK","probability":0.09424419364461999},{"country_id":"LU","probability":0.08481425418664694},{"country_id":"BE","probability":0.07536291977309376}]}')
        nock('https://api.agify.io')
            .get("/")
            .query({ name: "marc" })
            .reply(200, '{"name":"marc","age":50,"count":111312}')
    })

    it("Should eventually provide 'drink a single beer'", async function () {
        const response = await request.get("/api/nameinfo/marc")
        // nock.isDone()
        console.log(response)

        expect(response.body.gender).to.be.equal("male");
        expect(response.body.age).to.be.equal(50);
        expect(response.body.country).to.be.equal("DK");
    })
})