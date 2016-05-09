
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirate_table').del(),

    // Inserts seed entries
    knex('pirate_table').insert({
      name: 'Anne Bonney',
      poison: 'Rum',
      accessory: 'hot temper',
      image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'
    }),
    knex('pirate_table').insert({
      name: 'Belligerent Bud',
      poison: 'Tequilla',
      accessory: 'incredible abs',
      image_url: 'https://s-media-cache-ak0.pinimg.com/736x/d5/c8/cd/d5c8cde5db62c5b57835ede5a27df94c.jpg'
    }),
    knex('pirate_table').insert({
      name: 'Likely Lincoln',
      poison: 'Mead',
      accessory: 'Parrot',
      image_url: 'https://secure.static.tumblr.com/fe86ec516fb4808e2ec498268788279d/eynu4pz/7Igntumdn/tumblr_static_tumblr_static__640.jpg'
    })
  );
};
