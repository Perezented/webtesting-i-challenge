exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("Items")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("Items").insert([
                { name: "axe", enhancement: 1, durability: 20 },
                { name: "strongerAxe", enhancement: 3, durability: 40 },
                { name: "superAxe", enhancement: 8, durability: 50 },
                { name: "GoldAxe", enhancement: 20, durability: 100 },
            ]);
        });
};
