
exports.seed = function (knex) {
  return knex('comments').insert([
    { id: 1, comment: 'Test comment', photoComment: 'https://fairwaysatbeylea.com/wp-content/uploads/2016/08/Dolphins.jpg', topicId: 3, userIdComment: 3 },
    { id: 2, comment: 'Nice', topicId: 2, userIdComment: 2 },
    { id: 3, comment: 'Other comment', videoComment: 'https://www.youtube.com/watch?v=gpyB54lSpYg', topicId: '3', userIdComment: 1 },
    { id: 4, comment: 'Yet another test comment', topicId: 3, userIdComment: 1 },
    { id: 5, comment: 'Sick bro', topicId: 2, userIdComment: 1 },
    { id: 6, comment: 'NOICE!', topicId: 1, userIdComment: 1 },
    { id: 7, comment: 'Awwwwwwww YAHHHHHH', gif: 'https://media.giphy.com/media/xYqKJsgR6qZFK/giphy.gif', topicId: 4, userIdComment: 1 },
    { id: 8, comment: 'This topic is thicccccccccc', gif: 'https://media.giphy.com/media/xEqOCqgifLJBu/giphy.gif', topicId: 4, userIdComment: 2 },
    { id: 9, comment: 'Damn boi this topic is thiccccc', videoComment: 'https://www.youtube.com/watch?v=37-9yPnL9aY', topicId: 4, userIdComment: 3 },
    { id: 10, gif: 'https://media.giphy.com/media/DqhwoR9RHm3EA/giphy.gif', topicId: 4, userIdComment: 4 },
    { id: 11, gif: 'https://media.giphy.com/media/3o6ZtpWvwnhf34Oj0A/giphy.gif', topicId: 4, userIdComment: 2 },
    { id: 12, gif: 'https://media.giphy.com/media/nmisnqZLCDInS/giphy.gif', topicId: 4, userIdComment: 1 },
    { id: 13, gif: 'https://media.giphy.com/media/zgSWpnMeK7dCM/giphy.gif', topicId: 4, userIdComment: 4 },
    { id: 14, comment: 'derp', gif: 'https://www.enchantedlearning.com/sgifs/Skyblueanim.gif', topicId: 4, userIdComment: 2 },
    { id: 15, comment: 'This was first deployed (1/29/21) you shitlords are my beta testers', gif: 'https://media.giphy.com/media/17C41UvchStTkd92UQ/giphy.gif', topicId: 5, userIdComment: 4 },
    { id: 16, comment: 'Error if you refresh while on a thread/post', gif: 'https://media.giphy.com/media/d6KXqyzam7mH3kZvHF/giphy.gif', topicId: 5, userIdComment: 1 },
    { id: 17, comment: 'Maybe a search function to find older posts (when more are posted, may become hard to find old posts)', gif: 'https://media.giphy.com/media/kqOkk3xDTrjSE/giphy.gif', topicId: 5, userIdComment: 2 },
    { id: 18, comment: 'Categories for posts maybe?', gif: 'https://media.giphy.com/media/fEZXym04F4fwk/giphy.gif', topicId: 5, userIdComment: 3 },
  ]);
};

