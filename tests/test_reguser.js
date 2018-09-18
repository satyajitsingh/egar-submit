const reguser_fn = require('../common/services/keycloak_registeruser');
const testuser = {
  username: 'test15@gmail.com',
  firstName: 'test15',
  lastName: 'test2',
  email: 'test15@gmail.com'
}

var usr = reguser_fn.post(testuser)
if(usr.id != null){
console.log(JSON.stringify(usr))
}
else {
  console.log('failure')
  console.log("err: " + JSON.stringify(usr))
}



