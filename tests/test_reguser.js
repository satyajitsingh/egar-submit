const reguser_fn = require('../common/services/keycloak_registeruser');
const testuser = {
  username: 'test15@gmail.com',
  firstName: 'test15',
  lastName: 'test2',
  email: 'test15@gmail.com'
}

var user = reguser_fn.post(testuser)
console.log(user);


