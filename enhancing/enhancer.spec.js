const enhancer = require("./enhancer.js");
// const db = require("../data/connection");
// test away!
it("Repairs items", () => {
    expect(true).toBe(true);
    expect(
        enhancer.repair({ name: "strongerAxe", enhancement: 3, durability: 40 })
    ).toEqual({ name: "strongerAxe", enhancement: 3, durability: 100 });
});
it("Success on enhancing item", () => {
    expect(true).toBe(true);
    expect(
        enhancer.succeed({
            name: "strongerAxe",
            enhancement: 3,
            durability: 40,
        })
    ).toEqual({ name: "strongerAxe", enhancement: 4, durability: 40 });
});
