exports.up = function(knex, Promise) {
    return knex.schema.createTable('responses',function(table){
        table.increments('id')
        table.string('responseContent')
        table.integer('topic_id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('responses')
};
