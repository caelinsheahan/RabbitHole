
exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics',function(table){
  table.increments('id')
  table.string('topicName')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('topics')
};
