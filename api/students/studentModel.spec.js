const db = require("../../data/dbConfig");
const Students = require("./students-model");

describe("environment", function () {
  it("should be using the testing database", function () {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("students model", function () {
  describe("insert()", function () {
    beforeEach(async () => {
      await db("students").truncate();
    });

    it("should insert students into database", async () => {
      // table was cleared by the beforeEach() function
      await Students.insert({ name: "wei" });
      await Students.insert({ name: "suzie" });

      const students = await db("students");

      expect(students).toHaveLength(2);
    });
  });
});
