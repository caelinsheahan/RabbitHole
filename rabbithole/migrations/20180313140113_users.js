exports.up = knex => {
  return knex.schema.createTable("users", (table) => {
    table.increments('id');
    table.varchar("first_name", 255).notNullable().defaultTo("");
    table.varchar("last_name", 255).notNullable().defaultTo("");
    table.varchar("email", 255).unique().notNullable();
    table.specificType("hashed_password", "char(60)").notNullable();
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'));
  })
};

exports.down = knex => knex.schema.dropTable("users");
