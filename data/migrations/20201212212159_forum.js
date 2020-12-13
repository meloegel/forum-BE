
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id')
            tbl.string('username').notNullable()
            tbl.string('password').notNullable()
            tbl.string('avatar')
            tbl.string('location')
            tbl.string('email')
        })
        .createTable('topics', tbl => {
            tbl.increments('id')
            tbl.string('topic').notNullable()
            tbl.string('description').notNullable()
            tbl.timestamp("timePosted").notNullable().defaultTo(knex.fn.now());

            tbl.integer('commentId').unsigned(), notNullable().references('comments.id').onUpdate('CASCADE').onDelete('CASCADE')
            tbl.integer('userId').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
        })
        .createTable('comments', tbl => {
            tbl.increments('id')
            tbl.string('comment')

            tbl.integer('topicId').unsigned().notNullable().references('topics.id').onUpdate('CASCADE').onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('topics')
        .dropTableIfExists('comments')
};
