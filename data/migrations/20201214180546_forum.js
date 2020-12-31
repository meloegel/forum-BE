
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
        })
        .createTable('topics', tbl => {
            tbl.increments('id')
            tbl.string('topic').notNullable()
            tbl.string('photoTopic')
            tbl.string('videoTopic')
            tbl.string('description').notNullable()
            tbl.timestamp('timePosted').notNullable().defaultTo(knex.fn.now());
            tbl.integer('userIdTopic').notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
        })
        .createTable('comments', tbl => {
            tbl.increments('id')
            tbl.string('comment')
            tbl.string('photoComment')
            tbl.string('videoComment')
            tbl.integer('topicId').notNullable().references('topics.id').onUpdate('CASCADE').onDelete('CASCADE')
            tbl.integer('userIdComment').notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('comments')
        .dropTableIfExists('topics')
        .dropTableIfExists('users')
};
