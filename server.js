const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const restrictedMiddleware = require('./auth/restricted-middleware');

const server = express();

const AuthRouter = require('./auth/auth-router');
const UserRouter = require('./users/users-router');
const ForumRouter = require('./forum/forum-router');

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', AuthRouter);
server.use('/api/auth/users', UserRouter)
server.use('/api/auth/forum', ForumRouter)

server.get('/', (req, res) => {
    const message = process.env.MESSAGE
    res.status(200).json({ message })
});


module.exports = server;