const figlet = require('figlet');
const colors = require('colors');

figlet('hello world!!', function (err, data) {
    if(err){
        console.log('something wrong'.red);
        console.dir(err);
        return;
    }
    console.log(data.green)
});