
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'test', password: 'asdasd', location: 'Detroit, MI', email: 'email@email.com', avatar: 'https://img.etimg.com/thumb/msid-67536727,width-650,imgsize-779412,,resizemode-4,quality-100/running-shoes_gettyimages.jpg', quote: 'test', about: 'test' },
    { id: 2, username: 'Bob', password: 'asdasd', location: 'Detroit, MI', email: 'email@email.com', avatar: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png', quote: 'test', about: 'test' },
    { id: 3, username: 'Steve', location: 'Miami, FL', password: 'asdasd', email: 'emailtest@email.com', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elle.com%2Fculture%2Ftech%2Fa26949802%2Fwoozy-face-emoji%2F&psig=AOvVaw0mhJkgmNP6Zra8QSEFL-TE&ust=1608072375909000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIj-0sfGzu0CFQAAAAAdAAAAABAJ', quote: 'test', about: 'test' }
  ]);
};