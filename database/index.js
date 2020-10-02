const dotenv = require('dotenv');
dotenv.config();

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
  }
});

module.exports = knex;
