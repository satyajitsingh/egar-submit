'use strict'
const logger = require('../../../common/utils/logger')
const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')
const reguser_fn = require('../../../common/services/keycloak_registeruser');

module.exports = (req, res) => {
 //get form values
  var usrname = req.body[UserId]
  var fname = req.body[UserFname]
  var lname = req.body[UserLname]
  var pwd = req.body[passwd] 

  // Define a validation chain for user registeration fieldz
	const userChain = [
    new ValidationRule(validator.notEmpty, 'username', req.body['UserId'], 'Please enter your email '),
    new ValidationRule(validator.notEmpty, 'userlname', req.body['UserFname'], 'Please enter your First Name'),
    new ValidationRule(validator.notEmpty, 'userlname', req.body['UserLname'], 'Please enter your Last Name'),
    new ValidationRule(validator.notEmpty, 'passwd', req.body['passwd'], 'Please enter your password'),
	]

	// Validate chains
	validator.validateChains([userChain]).then(response => {
    const testuser = {
      username: usrname,
      firstName: fname ,
      lastName: lname,
      email: usrname,
      passwd: pwd
    }
    var user;
    res.render('app/user/regmsg/index')
  })
}