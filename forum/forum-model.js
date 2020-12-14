const db = require('../data/db-config')

module.exports = {
    getAllTopics,
    getTopic,
    getAllTopicComments,
    addTopic,
    addComment,
    updateTopic,
    deleteTopic,
    deleteComment,
    getUserTopics,
}

function getAllTopics() {
    return db('topics')
}

function getTopic(id) {
    return db('topics')
        .where({ id })
        .first()
}





function addTopic(topic) {
    return db('topics').insert(topic, 'id')
}

function addComment(comment) {
    return db('comment').insert(comment, 'id')
}