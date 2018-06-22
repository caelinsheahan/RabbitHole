exports.up = function(knex, Promise) {
    return knex.schema.createTable('votes',function(table){
        table.increments('id')
        table.integer('response_id')
        table.integer('voteCount')
        table.integer('user_id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('votes')
};
