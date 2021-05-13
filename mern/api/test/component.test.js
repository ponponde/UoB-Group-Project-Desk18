const chai = require("chai");
const supertest = require("supertest");

const { app } = require("../server");
const conn = require("../db");

const { expect } = chai;

// describe("GET /example", () => {
//     before((done) => {
//         conn.connect()
//             .then(() => done())
//             .catch((error) => {
//                 console.log("Error occurred in before tests.", error);
//                 done(error);
//             });
//     });

//     after((done) => {
//         conn.close()
//             .then(() => done())
//             .catch((error) => {
//                 console.log("Error occurred in before tests.", error);
//                 done(error);
//             });
//     });

//     it("should respond with code 200", (done) => {
//         supertest(app)
//             .get("/api/example")
//             .expect(200)
//             .end((err) => {
//                 if (err) {
//                     done(err);
//                 }
//                 done();
//             });
//     });

//     it("should return an array", (done) => {
//         supertest(app)
//             .get("/api/example")
//             .then((res) => {
//                 const { body } = res;
//                 expect(Array.isArray(body)).to.be.true;
//             })
//             .then(() => done())
//             .catch((err) => done(err));
//     });
// });

describe("GET /api/forum/:country", () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });

    it("should respond with code 200", (done) => {
        supertest(app)
            .get("/api/forum/GB")
            .expect(200)
            .end((err) => {
                if (err) {
                    done(err);
                }
                done();
            });
    });

    it("should insert a post for the next test", (done) => {
        const reqData = {
            country: "GB",
            author: "Han Solo",
            author_id: 2,
            content: "We supply a series of design principles, practical patterns and high quality design resources",
        };
        supertest(app)
            .post("/api/forum/")
            .send(reqData)
            .then((res) => {
                const { body } = res;
                expect(body.country === reqData.country).to.be.true;
                expect(body.author === reqData.author).to.be.true;
                expect(body.author_id == reqData.author_id).to.be.true;
                expect(body.content === reqData.content).to.be.true;
            })
            .then(() => done())
            .catch((err) => done(err));
    });

    it("should return an array", (done) => {
        const reqData = {
            country: "GB",
            author: "Han Solo",
            author_id: 2,
            content: "We supply a series of design principles, practical patterns and high quality design resources",
        };

        supertest(app)
            .get("/api/forum/GB")
            .then((res) => {
                const { body } = res;
                expect(Array.isArray(body)).to.be.true;
                expect(body[0]).to.have.property("content");
                expect(body[0]).to.have.property("author");
                expect(body[0]).to.have.property("country");
                expect(body[0]).to.have.property("date");
            })
            .then(() => done())
            .catch((err) => done(err));
    });
});

describe("POST /api/forum/", () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });

    it("should respond with code 200", (done) => {
        supertest(app)
            .get("/api/forum/GB")
            .expect(200)
            .end((err) => {
                if (err) {
                    done(err);
                }
                done();
            });
    });

    it("should respond with code 200 and the inserted post", (done) => {
        const reqData = {
            country: "GB",
            author: "Han Solo",
            author_id: 2,
            content: "We supply a series of design principles, practical patterns and high quality design resources",
        };
        supertest(app)
            .post("/api/forum/")
            .send(reqData)
            .then((res) => {
                const { body } = res;
                expect(body.country === reqData.country).to.be.true;
                expect(body.author === reqData.author).to.be.true;
                expect(body.author_id == reqData.author_id).to.be.true;
                expect(body.content === reqData.content).to.be.true;
            })
            .then(() => done())
            .catch((err) => done(err));
    });

    it("should return an array of posts for a country", (done) => {
        supertest(app)
            .get("/api/forum/GB")
            .then((res) => {
                const { body } = res;
                expect(Array.isArray(body)).to.be.true;
                expect(body[0]).to.have.property("content");
                expect(body[0]).to.have.property("author");
                expect(body[0]).to.have.property("country");
                expect(body[0]).to.have.property("date");
            })
            .then(() => done())
            .catch((err) => done(err));
    });
});

describe("POST /api/auth/signup", () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });

    it("should respond with code 200 and message", (done) => {
        const reqData = {
            username: "abc",
            password: "12345",
            email: "abc@gmail.com",
        };
        supertest(app)
            .post("/api/auth/signup")
            .send(reqData)
            .expect(200)
            .then((res) => {
                const { body } = res;
                expect(body.message === "User was registered successfully!").to.be.true;
            })
            .then(() => done())
            .catch((err) => done(err));
    });

    it("should respond with code 400 if missing a field", (done) => {
        const reqData = {
            username: "abc",
            //  password: "12345",
            email: "abc@gmail.com",
        };
        supertest(app)
            .post("/api/auth/signup")
            .send(reqData)
            .expect(400)
            .then(() => done())
            .catch((err) => done(err));
    });
});

describe("POST /api/auth/signin", () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((error) => {
                console.log("Error occurred in before tests.", error);
                done(error);
            });
    });

    it("should insert an user for the next testing", (done) => {
        const reqData = {
            username: "abccba",
            password: "12345",
            email: "abccba@gmail.com",
        };
        supertest(app)
            .post("/api/auth/signup")
            .send(reqData)
            .expect(200)
            .then((res) => {
                const { body } = res;
                expect(body.message === "User was registered successfully!").to.be.true;
            })
            .then(() => done())
            .catch((err) => done(err));
    });

    it("should respond with code 200 and accessToken", (done) => {
        const reqData = {
            username: "abccba",
            password: "12345",
        };
        supertest(app)
            .post("/api/auth/signin")
            .send(reqData)
            .expect(200)
            .then((res) => {
                const { body } = res;
                expect(body.username === reqData.username).to.be.true;
                expect(body).to.have.property("accessToken");
                expect(body).to.have.property("id");
                expect(body).to.have.property("email");
            })
            .then(() => done())
            .catch((err) => done(err));
    });
    it("should respond with code 400 if user not found", (done) => {
        const reqData = {
            username: "aaa",
            password: "12345",
        };
        supertest(app)
            .post("/api/auth/signin")
            .send(reqData)
            .expect(404)
            .then(() => done())
            .catch((err) => done(err));
    });
});
