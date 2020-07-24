const db = require("../../data/dbConfig");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(student) {
  return db("students").insert(student, "id");
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("students");
}

function findById(id) {
  return null;
}
