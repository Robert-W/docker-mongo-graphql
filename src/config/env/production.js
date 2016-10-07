/**
* @name exports
* @static
* @summary Production environment configurations
*/
module.exports = {

  port: process.env.PORT || 3000,

  app: {
    title: 'Production'
  },

  mongo: {
    db: 'mongodb://mongo/docker-test',
    admin: {
      username: process.env.MONGO_ADMIN_USERNAME,
      password: process.env.MONGO_ADMIN_PASSWORD
    }
  },

  passwordRequirements: {

  }

};
