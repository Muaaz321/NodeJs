
const {format} = require('date-fns');
const {v4:uuid} = require('uuid');

console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))
console.log('to run from Package json execute - npm run dev')

console.log('UUID => ' + uuid())

console.log('to install specific version eg :npm i uuid@8.3.1' )

//check for update
//npm update
//npm rm 
//npm rm nodemon -D , for dev dependency 
//npm rm nodemon -g , for global dependency
//if you remove dependecy check for script as well , script wont remove , better to check

console.log('npm init') // to initial npm package

//adding dependencies to the package file
console.log('npm i date-fns') 
console.log('npm i uuid')
//to ignore node module to avoid upload to git
// create .gitignore and mention the module
