
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').insert([
    {
      comment:'this general stuff is cool right?',
      user_id:1,
      post_id:1,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      comment:'this science stuff is cool right?',
      user_id:1,
      post_id:2,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      comment:'this tech stuff is cool right?',
      user_id:1,
      post_id:4,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      comment:'this gaming stuff is cool right?',
      user_id:1,
      post_id:5,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      comment:'this general stuff is cool right?',
      user_id:1,
      post_id:1,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      comment:'this general stuff is cool right?',
      user_id:1,
      post_id:1,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      comment:'this general stuff is cool right?',
      user_id:1,
      post_id:1,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      comment:'this general stuff is cool right?',
      user_id:1,
      post_id:1,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      comment:'this general stuff is cool right?',
      user_id:1,
      post_id:1,
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    }
  ]);
};
