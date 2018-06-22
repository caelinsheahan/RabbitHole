exports.seed = knex => {
  return knex('topics').del()
    .then(() => {
      return knex('topics').insert([{
        id: 1,
        topicName: 'bananas'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('topics_id_seq', (SELECT MAX(id) FROM topics));"
      );
    });
};
