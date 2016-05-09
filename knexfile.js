module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/pirates_development',
    pool: {
      min: 1,
      max: 1
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 1
    }
  }

};
