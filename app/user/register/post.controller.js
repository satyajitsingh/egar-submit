'use strict'
const logger = require('../../../common/utils/logger')
const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')
const reguser_fn = require('../../../common/services/keycloak_registeruser');

module.exports = (req, res) => {
 //get form values
 console.log(req.body['userId'])
 console.log(req.body['userFname'])
  var usrname = req.body['userId']
  var fname = req.body['userFname']
  var lname = req.body['userLname']
  var pwd = req.body['Password'] 

  // Define a validation chain for user registeration fields
  const fnameChain = [
    new ValidationRule(validator.notEmpty, 'userfname', fname, 'Please enter your first name')
  ]
  const lnameChain = [
    new ValidationRule(validator.notEmpty, 'userlname', lname, 'Please enter your last name')
  ]

  const userChain = [
    new ValidationRule(validator.notEmpty, 'userId', usrname, 'Please enter your email'),
    new ValidationRule(validator.email, 'userId', usrname, 'Please enter a valid email address')
  ]

    const passwdChain = [
    new ValidationRule(validator.notEmpty, 'passwd', pwd, 'Please enter your password')
  ]
  
  const uservalidChain = [
    new ValidationRule (validator.userexists,'userId', usrname, 'User with this email Id already exists')
    ]

	// Validate chains
	validator.validateChains([userChain,fnameChain,lnameChain,passwdChain]).then(response => {
    const user = {
      username: usrname,
      firstName: fname ,
      lastName: lname,
      email: usrname,
      passwd: pwd
    }
    var usr = reguser_fn.post(user)
    if(usr.id != null){
      console.log(JSON.stringify(usr))
    var uuid = JSON.stringify(usr.id)
    res.render('app/user/regmsg/index')
    }
    else {
      validator.validateChains([uservalidChain]).then(response => {
        res.render('app/user/regmsg/index')
      }).catch(err => {
        logger.error(err)
        console.log(err)
        res.render('app/user/register/index', { errors: err })
      })
    }
  }).catch(err => {
    logger.error(err)
    console.log(err)
    res.render('app/user/register/index', { errors: err })
  })
}