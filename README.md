# [Trash_Can] FE

## Created By: Mark Loegel

## Documentation:

Base URL for Deployed API: <br>
Front-End Github: <br>
Front-End Deployment: <br>

## About

[ Trash_Can ] was created by Mark Loegel to practice my programming skills as well as create a place to post garbage among friends. [ Trash_Can ] is an account only site, to view the garbage posted here create and account. From your account you can post your own trash or comment on someone elses trash.

## Technologies Used

-Node <br>
-Express <br>
-Knex <br>
-Bcryptjs<br>
-Helmet<br>
-Jsonwebtoken<br>
-PostgresSQL3<br>

## Endpoints

| Request | URL                                | Description                  | Requires Token | Requires Account |
| ------- | ---------------------------------- | ---------------------------- | -------------- | ---------------- |
| POST    | /api/auth/register                 | register as a new user       | -              | -                |
| POST    | /api/auth/login                    | login as existing user       | -              | -                |
| GET     | /api/auth/users/                   | gets all users               | X              | N/A              |
| GET     | /api/auth/users/:id                | gets a user                  | X              | X                |
| PUT     | /api/auth/users/:id                | updates a user               | X              | X                |
| DELETE  | /api/auth/users/:id                | deletes a user               | X              | N/A              |
| GET     | /api/auth/forum/                   | gets all topics              | X              | X                |
| GET     | /api/auth/forum/topic/:id          | get a topic                  | X              | X                |
| GET     | /api/auth/forum/topic/:id/comments | get all comments for a topic | X              | X                |
| GET     | /api/auth/forum/user/:id/topics    | get a users topics           | X              | X                |
| POST    | /api/auth/forum/                   | add topic                    | X              | X                |
| POST    | /api/auth/forum/comment            | add comment                  | X              | X                |
| PUT     | /api/auth/forum/:id                | update topic                 | X              | X                |
| DELETE  | /api/auth/forum/:id                | delete topic                 | X              | X                |
| DELETE  | /api/auth/forum/comment/:id        | delete comment               | X              | X                |
