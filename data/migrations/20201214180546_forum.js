
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id')
            tbl.string('username').unique().notNullable()
            tbl.string('password').notNullable()
            tbl.string('avatar')
            tbl.string('location')
            tbl.string('email')
            tbl.string('quote')
            tbl.string('about')
        })
        .createTable('topics', tbl => {
            tbl.increments('id')
            tbl.string('topic').notNullable()
            tbl.string('photo')
            tbl.string('video')
            tbl.string('description').notNullable()
            tbl.timestamp('timePosted').notNullable().defaultTo(knex.fn.now());
            tbl.integer('userId').notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
        })
        .createTable('comments', tbl => {
            tbl.increments('id')
            tbl.string('comment')
            tbl.string('photo')
            tbl.string('video')
            tbl.integer('topicId').notNullable().references('topics.id').onUpdate('CASCADE').onDelete('CASCADE')
            tbl.integer('userId').notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('comments')
        .dropTableIfExists('topics')
        .dropTableIfExists('users')

};
