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

function getAllTopicComments(id) {
    return db('comments')
        .select('comments.id AS commentID', 'comments.comment', 'comments.photoComment',
            'comments.videoComment', 'comments.userIdComment', 'comments.gif')
        .where({ 'comments.topicId': id })
        .join('topics', 'topics.id', 'comments.topicId').orderBy('comments.id')
}

function addTopic(topic) {
    return db('topics').insert(topic, 'id')
}

function addComment(comment) {
    return db('comments').insert(comment, 'id')
}

function updateTopic(changes, id) {
    return db('topics')
        .where({ id })
        .update(changes)
}

function deleteTopic(id) {
    return db('topics')
        .where({ id })
        .del()
}

function deleteComment(id) {
    return db('comments')
        .where({ id })
        .del()
}

function getUserTopics(id) {
    return db('topics')
        .select('topics.id AS topicID', 'topics.topic', 'topics.photoTopic',
            'topics.videoTopic', 'topics.description', 'topics.timePosted', 'topics.userIdTopic')
        .where({ 'topics.userIdTopic': id })
        .join('users', 'users.id', 'topics.userIdTopic').orderBy('topics.id')
}