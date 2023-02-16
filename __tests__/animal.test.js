"use strict";

const { app } = require("../src/server");
const supertest = require("supertest");
const { sequelizeDatabase } = require("../src/models");
const request = supertest(app);

//connect to the database
beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe("REST API", () => {
  it("creates a animal", async () => {
    let response = await request.post("/animal").send({
      name: "John",
      age: 21,
      pronouns: "they/them",
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("John");
    expect(response.body.age).toEqual(21);
    expect(response.body.pronouns).toEqual("they/them");
    expect(response.body.id).toBeTruthy();
  });

  it("gets animals", async () => {
    let response = await request.get("/animal");

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual("John");
    expect(response.body[0].age).toEqual(21);
    expect(response.body[0].pronouns).toEqual("they/them");
    expect(response.body[0].id).toBeTruthy();
  });
});
