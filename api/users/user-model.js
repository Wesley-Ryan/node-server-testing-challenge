const db = require("../../data/connection");

module.exports = {
  getAll() {
    return db("users");
  },
  async create(user) {
    const [id] = await db("users").insert(user);
    return db("users").where("id", id).first();
  },
  delete(id) {
    return db("users").where("id", id).delete();
  },
};
