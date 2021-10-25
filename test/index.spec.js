/**
 * Integration test file
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */ 
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");
const PostChema = require("../src/models/Post");

chai.use(chaiHttp);

/**
 * Start of route integration tests
 *
 */
describe("Integration Test - Unauthenticated System Routes", () => {
  /**
   * Route for home page
   */
  it("localhost:3003/api - GET", () => {
    chai
      .request(app)
      .get("/api/")
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
      });
  });
  /**
   * Route for home list route
   */
  it("localhost:3003/api/user - GET", () => {
    chai
      .request(app)
      .get("/api/user")
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
      });
  });
  /**
   * Route for create user
   */
  it("localhost:3003/api/register - GET", () => {
    chai
      .request(app)
      .post("/api/user/register")
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
      });
  });
});
