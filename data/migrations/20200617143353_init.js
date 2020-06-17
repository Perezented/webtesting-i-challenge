const { toBlock } = require("@babel/types");

exports.up = function (knex) {
    return knex.schema.createTable(
        "Items"((tbl) => {
            tbl.increments();
            tbl.string("name").notNullable().unique().index();
            tbl.integer("enhancement");
            tbl.integer("durability");
        })
    );
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("items");
};
