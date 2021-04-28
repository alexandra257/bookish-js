const config = {
  mssqlConnectionConfig: {
      user: 'sa',
      password: 'Bo0kish12',
      server: 'localhost',
      database: 'bookish',
      options: {
          "enableArithAbort": true
      }
  },
  secret: 'bookish-secret'
};

module.exports = config
