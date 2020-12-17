const User = require("./user-model");
const db = require("../../data/connection");
const { response } = require("express");

const Albert = { name: "Albert" };
const Edward = { name: "Edward" };
const Bells = { name: "Ella" };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db("users").truncate();
});
afterAll(async () => {
  await db.destroy();
});

describe("User Model Performs as expected ", () => {
  it("Returns an empty array if no users exsist.", async () => {
    const response = await User.getAll();
    expect(response).toHaveLength(0);
  });
  it("Returns users if they exsist.", async () => {
    await db("users").insert(Albert);
    const response = await User.getAll();
    expect(response).toHaveLength(1);
  });
  it("Returns the proper structure", async () => {
    await db("users").insert(Bells);
    const result = await User.getAll();
    expect(result[0]).toHaveProperty("id");
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toMatchObject(Bells);
  });
});
