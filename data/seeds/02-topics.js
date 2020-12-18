
exports.seed = function (knex, Promise) {
  return knex('topics').insert([
    { id: 1, topic: 'Why is the sky blue', photoTopic: 'https://eus-www.sway-cdn.com/s/lS9lnvgYelIJHUrK/images/Q-RqK_GAjZjzbG?quality=960&allowAnimation=false', description: 'Wondering why the sky is blue', userIdTopic: '1' },
    { id: 2, topic: 'Test topic', videoTopic: 'https://www.youtube.com/watch?v=8hkY31-muFo', description: 'Good album', userIdTopic: '1' },
    { id: 3, topic: 'Another test', photoTopic: 'https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg', description: 'Tiger', userIdTopic: '2' },
  ]);
};
