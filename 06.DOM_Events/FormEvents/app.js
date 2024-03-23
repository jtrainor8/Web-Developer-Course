
//**********used this for the other version of this video, to make me pick the tags and names and such **************/

// const form = document.querySelector('#tweetForm');
// const user = document.querySelector('#username');
// const list = document.querySelector('#tweets')
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = user.value;
//     const newLi = document.createElement('li');
//     newLi.innerText = username;
//     list.append(newLi);
//     user.value = '';
// })



// ***** This is from the original version of his course - the one above was from the new vresion *****

const tweetForm = document.querySelector('#tweetForm');
const tweetList = document.querySelector('#tweets');

tweetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetList.append(newTweet);
};


