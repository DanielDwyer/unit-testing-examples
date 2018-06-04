'use strict'

const dataController = (x,y) => {
// function dataController (x,y) {
  const unpredictableOutput = (x,y) => {

    if(!x || !y){
      return 'Invalid JSON'
    }else if(x === '' || x === ' ' || y === '' || y === ' '){
      return 'Invalid JSON'
    }else{
      return JSON.stringify({key: x, otherKey: y})
    }

  }

  return unpredictableOutput(x,y)

}


module.exports = {
  dataController:dataController
}
