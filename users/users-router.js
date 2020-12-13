const express = require('express');
const router = express.Router();
const Users = require('./users-model');


// Gets All Users // 
router.get('/', (req, res) => {
    Users.getAllUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error getting all users' })
        })
})


// Gets a User //
router.get('/:id', (req, res) => {
    const { id } = req.params
    Users.getUser(id)
        .then(user => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ Erorr: `Could not find user with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: `Error getting user` })
        })
})


// Updates a User //
router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    Users.getUser(id)
        .then(user => {
            if (user) {
                Users.updateUser(changes, id)
                    .then(updatedUser => {
                        res.status(200).json({ Message: `Updated user with is: ${id}`, updatedUser })
                    })
            } else {
                res.status(404).json({ Error: `Could not find user with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Failed to update user' })
        })
})


// Deletes a User //
router.delete('/:id', (req, res) => {
    const { id } = req.params
    Users.deleteUser(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ Message: `User with id: ${id} has been deleted` })
            } else {
                res.status(404).json({ Error: `Could not find user with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error deleting user' })
        })
})

module.exports = router;