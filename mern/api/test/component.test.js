const chai = require("chai");
const supertest = require("supertest");

const {app} = require("../server");
const conn = require("../db");

const { expect } = chai;

describe("GET /example", () => {
  before((done) => {
    conn.connect()
      .then(() => done())
      .catch((error) => {
        console.log('Error occurred in before tests.', error);
        done(error);
      });
  })

  after((done) => {
    conn.close()
      .then(() => done())
      .catch((error) => {
        console.log('Error occurred in before tests.', error);
        done(error);
      });
  })

  it("should respond with code 200", (done) => {
    supertest(app)
      .get("/api/example")
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        }
        done();
      })
    });

  it("should return an array", (done) => {
    supertest(app)
      .get("/api/example")
      .then((res) => {
        const {body} = res;
        expect(Array.isArray(body)).to.be.true;
      })
      .then(() => done())
      .catch((err) => done(err))
  });
});


// .then((res) => {
//   const body = res.body;
//   console.log(body);
//    expect(body.length).to.equal(0);
//   done();
// })
// .catch((err) => done(err));
