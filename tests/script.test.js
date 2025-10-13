app.test.js;
const request = require("supertest");
const app = require("./script");
const { describe } = require("yargs");
var testPerson = {}; //TODO Delete this

//TODO - Testing endpoints
describe("API routes", () => {
  test("GET /person", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello, world!" });
  });

  test("POST /api/echo returns the sent body", async () => {
    const payload = { name: "ChatGPT" };
    const res = await request(app).post("/api/echo").send(payload);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ youSent: payload });
  });
});

testPerson = {
  CPR: "2109615183",
  firstName: "Jens S.",
  lastName: "Paulsen",
  gender: "male",
  birthDate: "1961-09-21",
  address: {
    street: "\u00e6zZPxl\u00f8fIt\u00d8kXFMhhP\u00f8cnXIcQJ\u00c6oJVQDxwTsBJaJ",
    number: "466R",
    floor: "st",
    door: "z92",
    postal_code: "6823",
    town_name: "Ansager",
  },
  phoneNumber: "61216361",
};
//Testing functionalities
describe("Testing handlePersonData()", () => {});

//TODO NEGATIVE TESTS
describe("Error handling", () => {});
