const express = require('express');
const router = express.Router();
const Forum = require('./forum-model');

// Get all Topics //
router.get('/', (req, res) => {
    Forum.getAllTopics()
        .then(topics => {
            res.status(200).json(topics)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error getting list of Topics' })
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
                res.status(404).json({ Error: `Could not find Topic with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: `Error getting Topic with id: ${id}` })
        })
})

// Get all Comments //
router.get('/comments', (req, res) => {
    Forum.getAllComments()
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error getting list of Comments' })
        })
})


// Get all Comments for Topic //
router.get('/topic/:id/comments', (req, res) => {
    const { id } = req.params
    Forum.getAllTopicComments(id)
        .then(comments => {
            if (comments) {
                res.status(200).json(comments)
            } else {
                res.status(404).json({ Error: `Could not find Comments for Topic with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: `Error getting Comments for Topic with id: ${id}` })
        })
})

// Get a Users Topics //
router.get('/user/:id/topics', (req, res) => {
    const { id } = req.params;
    Forum.getUserTopics(id)
        .then(topics => {
            if (topics) {
                res.status(200).json(topics)
            } else {
                res.status(404).json({ Error: `Could not find Topics for user with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: `Error getting Topics for user with id: ${id}` })
        })
})

// Add Topic //
router.post('/', (req, res) => {
    const newTopic = req.body
    Forum.addTopic(newTopic)
        .then(topic => {
            res.status(201).json({ Posted: newTopic })
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
router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    Forum.getTopic(id)
        .then(topic => {
            if (topic) {
                Forum.updateTopic(changes, id)
                    .then(updatedTopic => {
                        res.status(200).json({ Message: `Updated Topic with id: ${id}` })
                    })
            } else {
                res.status(404).json({ Error: `Could not find Topic with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Failed to update Topic' })
        })
})

// Delete Topic //
router.delete('/:id', (req, res) => {
    const { id } = req.params
    Forum.deleteTopic(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ Message: `Topic with id: ${id} has been deleted` })
            } else {
                res.status(404).json({ Error: `Could not find Topic with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error deleting Topic' })
        })
})

// Delete Comment //
router.delete('/comment/:id', (req, res) => {
    const { id } = req.params
    Forum.deleteComment(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ Message: `Comment with id: ${id} has been deleted` })
            } else {
                res.status(404).json({ Error: `Could not find Comment with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error deleting Comment' })
        })
})


module.exports = router;