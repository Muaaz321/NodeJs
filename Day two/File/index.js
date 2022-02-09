// const fs = require('fs');

const fsPromises = require('fs').promises; 
const path = require('path');


const fileOps = async () => {
    try {
        // read
        const data = await fsPromises.readFile('C:/ReactJs/NodeJs/Day two/File/starter.txt','utf8');
        console.log(data.toString());
        // delete
        await fsPromises.unlink('C:/ReactJs/NodeJs/Day two/File/starter.txt');

        // write
        await fsPromises.writeFile('C:/ReactJs/NodeJs/Day two/File/Promiseread.txt','This is from Async - file ops fucntion');
        // append
        await fsPromises.appendFile('C:/ReactJs/NodeJs/Day two/File/Promiseread.txt','\n\n This is from edit Async');
        //rename
        await fsPromises.rename('C:/ReactJs/NodeJs/Day two/File/Promiseread.txt','C:/ReactJs/NodeJs/Day two/File/Promiserename.txt');
        //read again with updated file
        const newData = await fsPromises.readFile('C:/ReactJs/NodeJs/Day two/File/Promiserename.txt','utf8');
        console.log(newData.toString());

    } catch (error) {
        console.log(error);
    }
    
}

fileOps()



// fs.readFile('C:/ReactJs/NodeJs/Day two/File/starter.txt','utf8',(err,data) => {
//     if(err) throw err;
//     console.log(data);
// })







// following we can control the order of execution
// fs.writeFile('C:/ReactJs/NodeJs/Day two/File/starterWrite.txt','This is from writefile',(err) => {
//     if(err) throw err;
//     console.log('write completed ....');

//     fs.appendFile('C:/ReactJs/NodeJs/Day two/File/starterWrite.txt','\n\nYes it is ',(err) => {
//         if(err) throw err;
//         console.log('Append completed ....');

//         fs.rename('C:/ReactJs/NodeJs/Day two/File/starterWrite.txt','C:/ReactJs/NodeJs/Day two/File/starterWriteRenamed.txt',(err) => {
//             if(err) throw err;
//             console.log('Rename completed ....');

//         })
//     })
// })

// fs.readFile(path.join(__dirname,'File','starter.txt'),'utf8',(err,data) => {
//     if(err) throw err;
//     console.log(data);
// })

//console.log("This is from Editor .....")


// exit on uncaught error
process.on('uncaughtException' , err => {
    console.error('There was a uncaught error : $(err)');
    process.exit(1);
})