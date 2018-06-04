var assert = require('assert');
var loginController =  require('../../controllers/login.controller');

beforeEach('Setting up the userList', function(){
  console.log('beforeEach');
  loginController.loadUserList(['abc123','xyz321']);
  //throw {error: 'Thrwoing Error to fail'}
});

describe('LoginController', function () {

  describe('isValidUserId', function(){

    it('should return true if valid user id', function(){
      var isValid = loginController.isValidUserId('abc123')
      assert.equal(isValid, true);
    });

    it('should return false if invalid user id', function(){
      var isValid = loginController.isValidUserId('abc1234')
      assert.equal(isValid, false);
    });

  });

  describe('isValidUserIdAsync', function(){

    it('should return true if valid user id', function(done){
      loginController.isValidUserIdAsync('abc123',
      function(isValid){
          assert.equal(isValid, true);
          done();
      });
    });

  });

});

describe('Basic Mocha String Test', function () {

  /*
  ** THIS TEST FAILS, string.length === 5 not 4
  */
  it('should return number of charachters in a string', function () {
      var stringTest = basics.basicStringFunction()
      assert.equal(stringTest.length, 4);
  });

  /*
  ** THIS TEST PASSES
  */
  it('should return number of charachters in a string', function () {
    var stringTest = basics.basicStringFunction()
    assert.equal(stringTest.length, 5);
  });

  /*
  ** THIS TEST PASSES
  */
  it('should return first charachter of the string', function () {
    var stringTest = basics.basicStringFunction()
    assert.equal(stringTest.charAt(0), 'H');
    // throw {myError:'throwing error to fail test'}
  });

});

describe('Basic Mocha Number Test', function () {

  /*
  ** THIS TEST FAILS, string.length === 5 not 4
  */
  it('should return a number', function () {
      var numberTest = 'String'
      assert.equal(numberTest, 'number');
  });

  /*
  ** THIS TEST PASSES
  */
  it('should return number 99', function () {
    var numberTest = basics.basicNumberFunction()
    assert.equal(numberTest, 99);
  });

  /*
  ** THIS TEST PASSES
  */
  it('should return a number', function () {
      var numberTest = basics.basicNumberFunction()
      assert.equal(typeof numberTest, 'number');
  });

});
