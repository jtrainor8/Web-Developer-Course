// const dayOfWeek = 'Friday';
// if (dayOfWeek === 'Monday') {
//     console.log("hate mondays")
// } else if (dayOfWeek == 'Saturday') {
//     console.log("yay saturday");
// } else {
//     console.log("meh");
// }

// const age = -75;
// if (age < 5) {
//     console.log("you are a child -> free");
// } else if (age < 10) {
//     console.log("you are child -> $10");
// } else if (age < 65) {
//     console.log("you are adult -> $20");
// } else if (age > 65) {
//     console.log("you are old -> free");
// }


// const age = 10;
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("free");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("please enter a valid age.")
// }

// const password = prompt('please enter a new password');
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("password good.");
// } else {
//     console.log('password bad');
// }



// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password!")
//     } else {
//         console.log('no spaces allowed.')
//     }
// } else {
//     console.log("Password too short, must be 6+ to ride.")
// }

// const input = prompt('enter something!');
// if (input) {
//     console.log("truthy");
// } else {
//     console.log("falsy");
// }

// const fName = prompt('please enter a first name');

// if (!fName) {
//     fName = prompt('try again');
// }


// const age = 45;
// if (!((age >= 0 && age < 5) || age >= 65)) {
//     console.log("not baby or senior.")
// }

// const day = 0;

// switch (day) {
//     case 1:
//         console.log('MONDAY');
//         break;
//     case 2:
//         console.log('TUESDAY');
//         break;
//     case 3:
//         console.log('WEDNESDAY');
//         break;
//     case 4:
//         console.log('THURSDAY');
//         break;
//     case 5:
//         console.log('FRIDAY');
//         break;
//     case 6:
//         console.log('SATURDAY');
//         break;
//     case 7:
//         console.log('SUNDAY');
//         break;
//     default:
//         console.log('Not a valid day.')
// }

// let array1 = ['a', 'b', 'c'];
// let array2 = ['d', 'e', 'f'];

// const person = { firstName: 'Mick', lastName: 'Jagger' };

//let comment = {
//     username: 'sillyGoose420',
//     downVotes: 2131
// }

// const kitchenSink = {
//     faveNum: 98487343,
//     isFunny: true,
//     colors: ['red', 'orange']
// };

// const years = { 1999: 'good', 2020: 'bad' };

// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// const fullAddress = restaurant['address'] + ', ' + restaurant['city'] + ' ' + restaurant['state'] + ' ' + restaurant['zipcode'];

// const midterms = { danielle: 96, thomas: 78 };

// const comments = [
//     { username: 'tammy', text: 'lolol', votes: 9 },
//     { username: 'fishBoy', text: 'glubglub', votes: 12387 }
// ]



// for (i = 1; i <= 10; i++) {
//     console.log("Da ba dee ba daa");
// }



// for (let i = 100; i >= 0; i = i - 10) {
//     console.log(i)
// }


// let count = 0;
// while (count < 10) {
//     console.log(count)
//     count++;
// }


// const secret = "BabyHippo";

// let guess = prompt("Enter the secret code...");
// while (guess !== secret) {
//     guess = prompt("Enter the secret code...");
// }
// console.log("Congrats u got the secret!")

// let input = prompt("Hey, say something.");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") { break; }
// }
// console.log("ok u win.")




//**********************guessing game project!************************

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"))
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum)

// let guess = parseInt(prompt("Enter your first guess!"))
// // while (!guess) {
// //     guess = parseInt(prompt("Enter a valid guess!"))
// // }

// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high, guess again.");
//     } else {
//         guess = prompt("Too low, guess again.");
//     }
// }
// if (guess === 'q') {
//     console.log('You quit, loser');
// } else {
//     console.log(`You got it! It took you ${attempts} guess(es)`);
// }

//**************************done guessing game****************************** */

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     diedra: 81,
//     vonnie: 60
// }

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }

// function singSong() {
//     console.log('Do')
//     console.log('Re')
//     console.log('Mi')
// }

// function greet(arg) {
//     console.log(`hi, ${arg}`)
// }

// function lastElement(array) {
//     if (array.length === 0) { return 'null'; }
//     else {
//         return array[array.length - 1];
//     }
// }


// function sumArray(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     return sum;
// }





// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// collectEggs();


// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch();

// const add = function (x, y) {
//     return x + y;
// }

// let greet = function () { console.log('hi'); }

// function callTwice(func) {
//     func();
//     func();
// }



// function makeMysteryFunk() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("congats I am good.")
//             console.log("you get $1.")
//         }
//     } else {
//         return function () {
//             console.log("You have been infected.")
//             console.log("Stop trying to close this window.")
//             console.log("Stop trying to close this window.")
//             console.log("Stop trying to close this window.")
//             console.log("Stop trying to close this window.")
//         }
//     }
// }

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }


// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

// const cat = {
//     name: 'Nerd',
//     color: 'red',
//     breed: 'Scottish',
//     meow() {
//         console.log(`${this.name} says meow`);
//     }
// }

// const meow2 = cat.meow;


// try {
//     hello.toUpperCase();
// } catch {
//     console.log('error')
// }

// console.log('after');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function print(element) {
//     console.log(element)
// }

// numbers.forEach(print);

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// })

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// const add = (x, y) => {
//     return x + y;
// }

// const add = (x, y) => x + y;

// console.log(add(3, 4));


// setTimeout(() => {
//     console.log('hello!!')
// }, 3000);

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 3000)


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const even = nums.filter(n => {
//     return n % 2 === 0;
// })


// const usernames = ['mark', 'turdburglermagee', 'kevin', 'charlie']
// const validUserNames = usernames => usernames.filter(user => user.length < 10);
// validUserNames(usernames)


// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }



////default params

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }

// function greet(person, msg = "hey there") {
//     return `${msg}, ${person}!`
// }


///


const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// // SPREAD IN ARRAYS
// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];
// const allPets = [...cats, ...dogs, 'charlie'];

// // SPREAD IN OBJECTS
// const feline = { legs: 4, family: 'Felidae' };
// const canine = { isFurry: true, family: 'Caninae' };
// const catDog = { ...feline, ...canine }

// const dataFromForm = {
//     email: 'blueman@gmail.com',
//     password: 'tobias123!',
//     username: 'tfunke'
// }

// const newUser = { ...dataFromForm, id: 2345, isAdmin: false }







function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}





