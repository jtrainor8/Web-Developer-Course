// THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log('it worked!');
//         console.log(response);
//         fakeRequestCallback('bokos.com/page2',
//             function (response) {
//                 console.log('it worked again!');
//                 console.log(response);
//                 fakeRequestCallback('bokos.com/page3',
//                     function (response) {
//                         console.log('it worked again (3)!');
//                         console.log(response);
//                     }, function () {
//                         console.log('error 3rdd request!'.err);
//                     })
//             }, function () {
//                 console.log('error 2nd request!'.err);
//             })
//     }
//     , function (err) {
//         console.log('error!'.err);
//     })

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestPromise('yelp.com/api/coffee')
//     .then(() => {
//         console.log('it worked! (page1)')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('it worked! (page2)')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('it worked! (page3)')
//                     })
//                     .catch(() => {
//                         console.log('oh no error page3')
//                     })
//             })
//             .catch(() => {
//                 console.log('oh no error page2')
//             })
//     })
//     .catch(() => {
//         console.log('oh no error page1')
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log(data)
        console.log('it worked! (page1)')
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log(data)
        console.log('it worked! (page2)')
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log(data)
        console.log('it worked! (page3)')
    })
    .catch((err) => {
        console.log(err)
        console.log('oh no, a request failed')
    })
