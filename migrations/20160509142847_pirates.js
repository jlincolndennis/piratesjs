
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirate_table', function (table) {
    table.increments();
    table.string('name');
    table.string('poison');
    table.string('accessory');
    table.string('image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirate_table');
};
