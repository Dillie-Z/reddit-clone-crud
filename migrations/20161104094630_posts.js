
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts',(table)=>{
    table.increments();
    table.string('imgUrl').notNullable().defaultTo('http://www.fillmurray.com/284/196');
    table.string('genre').notNullable().defaultTo('general');
    table.string('title').notNullable().defaultTo('');
    table.text('post').notNullable().defaultTo('');
    table.boolean('commentsVisible').notNullable().defaultTo(false);
    table.boolean('commentsFormVisible').notNullable().defaultTo(false);
    table.boolean('postEditFormVisible').notNullable().defaultTo(false);
    table.integer('votes').notNullable().defaultTo(0);
    table.string('date');
    table.string('author');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
