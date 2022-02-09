const fs = require('fs');


const rs = fs.createReadStream('C:/ReactJs/NodeJs/Day two/File/lorem.txt' , {encoding:'utf8'});

const ws = fs.createWriteStream('C:/ReactJs/NodeJs/Day two/File/lorem-new.txt');

rs.pipe(ws);

