// async function hello() {

// }

// const sing = async () => {
//     throw 'problem'
//     return 'LA LA LA LA'
// }

// sing()
//     .then((data) => {
//         console.log('promise resolved with', data)
//     })
//     .catch((err) => {
//         console.log('oh no', err)
//     })


const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    if (password === 'nixie') return 'Welcome!'
    throw 'Invalid Password'
}

login('hello', 'nixie')
    .then(msg => {
        console.log('logged in')
        console.log(msg)
    })
    .catch(err => {
        console.log('error')
        console.log(err)
    })


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000)) //implicit return - same line, no brackets
//     .then(() => delayedColorChange('yellow', 1000)) //implicit return 
//     .then(() => delayedColorChange('green', 1000)) //implicit return
//     .then(() => delayedColorChange('blue', 1000)) //implicit return
//     .then(() => delayedColorChange('indigo', 1000)) //implicit return
//     .then(() => delayedColorChange('violet', 1000)) //implicit return



async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

// rainbow().then(() => console.log('end of rainbow'))


async function printRainbow() {
    await rainbow();
    console.log('end of rainbow')
}

printRainbow();


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('ur fake data here');
            }
            reject('request error');
        }, 1000)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1);
        console.log(data2);
    } catch (e) {
        console.log('caught an error')
        console.log('error is - ', e)
    }
}

