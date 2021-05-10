const chai = require("chai");
const supertest = require("supertest");

const { app } = require("../server");

const { expect } = chai;

describe("GET /api/map/mapInfo/:id", function () {
    // before((done) => {
    //     conn.connect()
    //         .then(() => done())
    //         .catch((error) => {
    //             console.log("Error occurred in before tests.", error);
    //             done(error);
    //         });
    // });
    //
    // after((done) => {
    //     conn.close()
    //         .then(() => done())
    //         .catch((error) => {
    //             console.log("Error occurred in before tests.", error);
    //             done(error);
    //         });
    // });

    it("should respond with code 200", (done) => {
        supertest(app)
            .get("/api/map/mapInfo/GB")
            .expect(200)
            .end((err) => {
                if (err) {
                    done(err);
                }
                done();
            });
    });

    it("should have all statistical properties", (done) => {
        supertest(app)
            .get("/api/map/mapInfo/GB")
            .then((res) => {
                const { body } = res;
                expect(body).to.have.property("Country");
                expect(body).to.have.property("CountryCode");
                expect(body).to.have.property("Confirmed");
                expect(body).to.have.property("Deaths");
                expect(body).to.have.property("Recovered");
                expect(body).to.have.property("Active");
                expect(body).to.have.property("Recommendation");
                expect(body).to.have.property("Notes");
                expect(body).to.have.property("statistics");
                expect(body).to.have.property("rankList");
            })
            .then(() => {
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});
