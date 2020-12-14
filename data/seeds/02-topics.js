
exports.seed = function (knex, Promise) {
  return knex('topics').insert([
    { id: 1, topic: 'Why is the sky blue', photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oecd.org%2Finnovation%2Fblue-sky.htm&psig=AOvVaw1rUyWWRUOTsZgVL-8eG7t_&ust=1608073131174000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKij_q_Jzu0CFQAAAAAdAAAAABAD', description: 'Wondering why the sky is blue', userId: '1' },
    { id: 2, topic: 'Test topic', video: 'https://www.youtube.com/watch?v=8hkY31-muFo', description: 'Good album', userId: '1' },
    { id: 3, topic: 'Another test', photo: 'https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg', description: 'Tiger', userId: '2' },
  ]);
};
