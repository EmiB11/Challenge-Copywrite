const supertest = require("supertest");
var request = require('supertest');
const app = require('../../src/app.js');

describe("GET /iecho?text=", function() {
  it("it should has status code 200",  function() {
    supertest(app)
      .get("/iecho?text=luz azul")
      .expect(200)
      
  });
  
  it("it should has status code 200",  function() {
    supertest(app)
      .get("/iecho?text=luz")
      .expect(200)
      
  });
  it("it should has status code 400",  function() {
    supertest(app)
      .get("/iecho?text={[]}}{++")
      .expect(400)
      
  });
  it("it should has status code 400",  function() {
    supertest(app)
      .get("/iecho")
      .expect(400)
      
  });
  it("it should has status code 400",  function() {
    supertest(app)
      .get("/iecho?text=123456")
      .expect(400)
      
  });
});

