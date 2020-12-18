
exports.seed = function (knex) {
  return knex('comments').insert([
    { id: 1, comment: 'Test comment', photoComment: 'https://fairwaysatbeylea.com/wp-content/uploads/2016/08/Dolphins.jpg', topicId: 3, userIdComment: 3 },
    { id: 2, comment: 'Nice', topicId: 2, userIdComment: 2 },
    { id: 3, comment: 'Other comment', videoComment: 'https://www.youtube.com/watch?v=gpyB54lSpYg', topicId: '3', userIdComment: 1 },
    { id: 4, comment: 'Yet another test comment', topicId: 3, userIdComment: 1 },
    { id: 5, comment: 'Sick bro', topicId: 2, userIdComment: 1 },
    { id: 6, comment: 'NOICE!', topicId: 1, userIdComment: 1 },
  ]);
};
