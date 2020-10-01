const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'opt',
    user: 'root',
    password: 'N0rzh1ll'
    //user: 'appuser',
    //password: 'Password'
  }
});

module.exports = knex;
