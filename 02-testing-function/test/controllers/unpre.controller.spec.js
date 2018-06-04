var assert = require('assert');
var dataController =  require('../../controllers/unpre.controller');


describe('Unpredictable Controller', function () {

  describe('unpredictableOutput', function(){

    it('should return valid JSON', function(){
      var isJSON = dataController.dataController('Daniel', 'Dwyer')
      assert.deepEqual(JSON.parse(isJSON), {key: 'Daniel', otherKey: 'Dwyer'});
    });

    it('should return invalid JSON warning/error', function(){
      var isJSON = dataController.dataController()
      assert.equal(isJSON, 'Invalid JSON');
    });

    it('should return invalid JSON warning/error', function(){
      var isJSON = dataController.dataController('', '')
      assert.equal(isJSON, 'Invalid JSON');
    });

    it('should return invalid JSON warning/error', function(){
      var isJSON = dataController.dataController(' ', ' ')
      assert.equal(isJSON, 'Invalid JSON');
    });

    it('should return invalid JSON warning/error', function(){
      var isJSON = dataController.dataController('A', ' ')
      assert.equal(isJSON, 'Invalid JSON');
    });

    it('should return invalid JSON warning/error', function(){
      var isJSON = dataController.dataController(' ', 'B')
      assert.equal(isJSON, 'Invalid JSON');
    });

  });

});
