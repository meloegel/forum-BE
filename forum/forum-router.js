const express = require('express');
const router = express.Router();
const Forum = require('./forum-model');
const Users = require('../users/users-model');

// Get all Topics //
router.get('/', (req, res) => {
    Forum.getAllTopics()
        .then(topics => {
            res.status(200).json(topics)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error getting list of topics' })
        })
})

// Get a Topic //
router.get('/topic/:id', (req, res) => {
    const { id } = req.params
    Forum.getTopic(id)
        .then(topic => {
            if (topic) {
                res.status(200).json(topic)
            } else {
                res.status(404).json({ Error: `Could not find topic with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: `Error getting topic with id: ${id}` })
        })
})

// Get all Comments for Topic //
router.get('/topic/comments', (req, res) => {
    const { id } = req.params
    Forum.getAllTopicComments(id)
        .then(comments => {
            if (comments) {
                res.status(200).json(topic)
            } else {
                res.status(404).json({ Error: `Could not find Comments for Topic with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: `Error getting Comments for Topic with id: ${id}` })
        })
})


// Add Topic //
router.post('/', (req, res) => {
    const newTopic = req.body
    Forum.addTopic(newTopic)
        .then(topic => {
            res.status(201).json({ Posed: newTopic })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error adding Topic' })
        })
})

// Add Comment //
router.post('/comment', (req, res) => {
    const newComment = req.body
    Forum.addComment(newComment)
        .then(comment => {
            res.status(201).json({ Posted: newComment })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error adding Comment' })
        })
})

// Update Topic //


// Delete Topic //


// Delete Comment //



// Get a Users Topics //