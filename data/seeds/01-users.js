// Passwords asdasd // // Passwords need to be hashed to login with seeds//
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'ForumPoster', password: '$2a$10$X4HNtDPHV3dhucUGlPYE8ONefcIzt8tX2GV3H0P/.oogb78S.X3yG', location: 'Detroit, MI', email: 'email@email.com', avatar: 'https://img.etimg.com/thumb/msid-67536727,width-650,imgsize-779412,,resizemode-4,quality-100/running-shoes_gettyimages.jpg', quote: 'BobbyBoucher', about: 'test' },
    { id: 2, username: '', password: '$2a$10$X4HNtDPHV3dhucUGlPYE8ONefcIzt8tX2GV3H0P/.oogb78S.X3yG', location: 'Detroit, MI', email: 'email@email.com', avatar: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png', quote: 'test', about: 'test' },
    { id: 3, username: 'StevieJanowski', location: 'Miami, FL', password: '$2a$10$X4HNtDPHV3dhucUGlPYE8ONefcIzt8tX2GV3H0P/.oogb78S.X3yG', email: 'emailtest@email.com', avatar: 'https://images.adagio.com/images2/custom_blends/152618.jpg', quote: 'test', about: 'test' }
  ]);
};