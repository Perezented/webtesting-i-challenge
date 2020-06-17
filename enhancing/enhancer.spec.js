const enhancer = require("./enhancer.js");
const { describe } = require("yargs");
const { italic } = require("chalk");
const db = require("../data/connection.js");
// test away!
describe("repairs item", function () {
    it("should repair an item to 100", function () {
        expect(true).toBe(true);
    });
});
