const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    const salt = await bcrypt.hash(pw,12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('logged you in, successful match')
    } else {
        console.log('incorrect')
    }
}


// hashPassword('monkey');
login('monkey', '$2b$12$nIkTny5QFC2Z7RcWWGyCDesF./xaB..FSGmhzRMVdbHJ2TjlBRHTq');
