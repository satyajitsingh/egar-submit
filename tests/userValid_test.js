'use strict'

var assert = require('assert')
const reguser_fn = require('../common/services/keycloak_registeruser');

const testuser = {
    username: 'test15@gmail.com',
    firstName: 'test15',
    lastName: 'test2',
    email: 'test15@gmail.com'
  }
  


describe('reguser_fn', function() {

    describe('#keycloak_registeruser()', function() {
  
      it('should return invalid user', function() {
        assert.equal(reguser_fn.post(testuser))
      })
  
    })
})