const fs = require('fs');


if(!fs.existsSync('./new')){
fs.mkdir('./new', (err) => {
    if(err) throw err;
    console.log('Directed created')
});

}

if(fs.existsSync('./new')){
fs.rmdir('./new', (err) => {
    if(err) throw err;
    console.log('Directed removed')
});
}
