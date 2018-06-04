function LoginController() {

  var userList;
  function loadUserList(users){
    userList = users;
  }

  function isValidUserId(user) {
    return userList.indexOf(user) >= 0;
  }

  function isValidUserIdAsync(user, callback) {
    setTimeout(function(){
      callback(userList.indexOf(user) >= 0)
    }, 1);
  }

  return {
    isValidUserId,
    isValidUserIdAsync,
    loadUserList
  }

}
const basicStringFunction = () => {
  return "Hello"
}

const basicNumberFunction = () => {
  return 99
}

module.exports = {
  basicStringFunction:basicStringFunction,
  basicNumberFunction:basicNumberFunction,
  LoginController:LoginController
}
