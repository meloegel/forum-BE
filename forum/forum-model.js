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

// Need to test this endpoint //
function getAllTopicComments(id) {
    return db('comments')
        .where({ 'comments.topicId': id })
        .join('topics', 'topics.id', 'comments.topicId').orderBy('comments.id')
}

function addTopic(topic) {
    return db('topics').insert(topic, 'id')
}

function addComment(comment) {
    return db('comment').insert(comment, 'id')
}

function updateTopic(changes, id) {
    return db('topics')
        .where({ id })
        .updates(changes)
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

// Need to test this endpoint //
function getUserTopics(id) {
    return db('topics')
        .where({ 'topics.userId': id })
        .join('users', 'users.id', 'topics.userId').orderBy('topics.id')
}