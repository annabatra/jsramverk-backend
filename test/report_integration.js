process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');

chai.should();

chai.use(chaiHttp);


describe('Reports', () => {
    describe('GET /reports/week/1', () => {
        it('200 HAPPY PATH AND CORRECT VALUES', (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.report.should.be.an("string");
                    res.body.data.week.length.should.be.above(0);

                    done();
                });
        });
    });

    describe('GET /reports/week/2', () => {
        it('200 HAPPY PATH AND CORRECT VALUES', (done) => {
            chai.request(server)
                .get("/reports/week/2")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.report.length.should.be.above(50);

                    done();
                });
        });
    });


    describe('POST /register', () => {
    it('TEST REGISTER A USER', (done) => {
        const body = {
            email: "testar@registrera.se",
            password: "testpassword"
        };

        chai.request(server)
            .post("/register")
            .send(body)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.an("object");
                done();
            });
    });
    });

    describe('POST /login', () => {
        it('TEST FAIL LOGIN', (done) => {
            const body = {
                email: "fel@user.test",
                password: "felpasswrd"
            };

            chai.request(server)
                .post("/login")
                .send(body)
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

});
