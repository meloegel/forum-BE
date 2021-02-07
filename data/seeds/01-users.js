// Passwords asdasd // // Passwords need to be hashed to login with seeds//
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'ForumPoster', password: '$2a$10$X4HNtDPHV3dhucUGlPYE8ONefcIzt8tX2GV3H0P/.oogb78S.X3yG', location: 'Detroit, MI', email: 'email@email.com', avatar: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png', quote: 'I love posting random shit!' },
    { id: 2, username: 'BobbyBoucher', password: '$2a$10$X4HNtDPHV3dhucUGlPYE8ONefcIzt8tX2GV3H0P/.oogb78S.X3yG', location: 'Detroit, MI', email: 'email@email.com', avatar: 'https://i1.sndcdn.com/artworks-000585482786-7cozwy-t500x500.jpg', quote: 'H2O for Life!' },
    { id: 3, username: 'StevieJanowski', location: 'Miami, FL', password: '$2a$10$X4HNtDPHV3dhucUGlPYE8ONefcIzt8tX2GV3H0P/.oogb78S.X3yG', email: 'emailtest@email.com', avatar: 'https://pbs.twimg.com/profile_images/1192571683800043525/1VY9Dff3_400x400.jpg', quote: 'Kenny Fan' },
    { id: 4, username: 'Rinzler (ADMIN)', location: 'The Grid', password: '$2a$10$X4HNtDPHV3dhucUGlPYE8ONefcIzt8tX2GV3H0P/.oogb78S.X3yG', email: 'emailtest@email.com', avatar: 'https://images4.fanpop.com/image/photos/18200000/Rinzler-tron-legacy-18221296-555-312.jpg', quote: 'Your friendly neighborhood admin, Mark' },
  ]);
};