const fs = require('fs');

//async below

// fs.mkdir('dogs', { recursive: true }, (err) => {
//     console.log('i am in the call back')
//     if (err) throw err;
//   }); 


//sync now
// fs.mkdirSync('Cats');
// console.log('i come after make directory')

const folderName = process.argv[2] || 'Project'


try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
}

catch (e) { 
    console.log('something went wrong!');
    console.log(e);
}