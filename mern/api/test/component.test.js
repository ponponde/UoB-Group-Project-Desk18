const chai = require("chai");
const request = require("supertest");

const app = require("../server");
const conn = require("../db");

describe("GET /example", () => {
    const { expect } = chai;
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    });

    //  after((done) => {
    //      conn.close()
    //          .then(() => done())
    //          .catch((err) => done(err));
    //  });

    it("OK, getting example", (done) => {
        request(app)
            .get("/api/example")
            .then((res) => {
                const body = res.body;
                console.log(body);
                //  expect(body.length).to.equal(0);
                done();
            })
            .catch((err) => done(err));
    });
});
