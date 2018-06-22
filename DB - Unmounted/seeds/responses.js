exports.seed = knex => {
  return knex('responses').del()
    .then(() => {
      return knex('responses').insert([{
        id: 1,
        responseContent: 'are a fruit',
        topic_id: 1
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('responses_id_seq', (SELECT MAX(id) FROM responses));"
      );
    });
};
