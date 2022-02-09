console.log('hello world')

//console.log(global);

// common js modules instead of ES6 modules
const os = require('os') // import statement in nodejs
const path = require('path')

const maths = require('./math')
const {add,substract,multiply,divide} = require('./math')

// retireve from maths object - method 1
console.log('Total ' + maths.add(1,3))

// directly calling add , substract ,, objects - method 2
console.log(add(1,4))
console.log(substract(10,3))
console.log(multiply(10,10))
console.log(divide(4,2))


console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)
console.log('*********')

//from path
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log('*********')

// get entire object
console.log(path.parse(__filename))
