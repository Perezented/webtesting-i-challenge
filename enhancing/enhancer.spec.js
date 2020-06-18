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

it("Success on enhancing item at enhancement=20", () => {
    expect(true).toBe(true);
    expect(
        enhancer.succeed({
            name: "SuperAxe",
            enhancement: 20,
            durability: 100,
        })
    ).toEqual({
        Godly: "Max level",
        durability: 100,
        enhancement: 20,
        name: "SuperAxe",
    });
});

it("Fails on enhancing item enhancement:14", () => {
    expect(true).toBe(true);
    expect(
        enhancer.fail({
            name: "strongerAxe",
            enhancement: 14,
            durability: 40,
        })
    ).toEqual({ name: "strongerAxe", enhancement: 14, durability: 35 });
});
it("Fails on enhancing item enhancement:16", () => {
    expect(true).toBe(true);
    expect(
        enhancer.fail({
            name: "strongerAxe",
            enhancement: 16,
            durability: 40,
        })
    ).toEqual({ name: "strongerAxe", enhancement: 16, durability: 30 });
});
it("Fails on enhancing item enhancement:15", () => {
    expect(true).toBe(true);
    expect(
        enhancer.fail({
            name: "strongerAxe",
            enhancement: 15,
            durability: 40,
        })
    ).toEqual({ name: "strongerAxe", enhancement: 15, durability: 30 });
});
