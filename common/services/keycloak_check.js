'use strict';

const adminClient = require('keycloak-admin-client');

const settings = {
  baseUrl: 'http://127.0.0.1:8080/auth',
  username: 'admin',
  password: 'admin',
  grant_type: 'password',
  client_id: 'admin-cli'
};

module.exports = {

  check: function () {
    adminClient(settings)
      .then((client) => {
        client.realms.find()
          .then((realms) => {
            //console.log('realms', realms);
            console.log('success')
          });
      })
      .catch((err) => {
        //console.log('Error', err);
        console.log('failure')
      });
    }
}