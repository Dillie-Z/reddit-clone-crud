
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',(table)=>{
    table.increments();
    table.string('firstName').notNullable().defaultTo('');
    table.string('lastName').notNullable().defaultTo('');
    table.string('email').notNullable().defaultTo('');
    table.specificType('hashedPassword', 'character(60)').notNullable();
    table.boolean('admin').notNullable().defaultTo(false);
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
