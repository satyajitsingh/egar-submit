const logger = require('../utils/logger')

const KeyCloakAdmin = require('keycloak-admin-client')

const settings = {
  baseUrl: 'http://127.0.0.1:8080/auth',
  username: 'admin',
  password: 'admin',
  grant_type: 'password',
  client_id: 'admin-cli'
}

const userModel = require('../models/user')

module.exports = {

  /**
   */
  post: function (user) {
    const kca = KeyCloakAdmin(settings)
    const realm = 'master'
    //console.log(user)
    //return new Promise(function (resolve, reject) {

      return  kca.then(client => {
        client.users.create(realm,user).then((users) => {
          //resolve(users)
          //return('sucess')
          client.users.resetPassword(realm,users.id, {
            temporary: false,
            value: 'password'
          });
          resolve(users);
        }).catch(function (err) {
          logger.error(err);
          //Promise.reject(err);
        })
    })
  }
}
