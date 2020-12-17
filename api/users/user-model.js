const db = require("../../data/connection");

module.exports = {
  getAll() {
    return db("users");
  },
  create(user) {
    return db("users").insert(user).first();
  },
  delete(id) {
    return db("users").where("id", id).delete();
  },
};
