module.exports = {

  development: {
      client: 'pg',
      connection: 'postgres://localhost/Dream_Date'
  },

  production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL + '?ssl=true'
  }

};