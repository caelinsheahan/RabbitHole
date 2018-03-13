exports.seed = knex => {
  return knex('votes').del()
    .then(() => {
      return knex('votes').insert([{
        id: 1,
        response_id: 1,
        voteCount: 0,
        user_id: 1
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('votes_id_seq', (SELECT MAX(id) FROM votes));"
      );
    });
};
