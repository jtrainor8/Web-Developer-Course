//some math functions we want to use in different files
// the below is a method, be it a little clunky.

// const add = (x, y) => x + y;
// const PI = 3.14159;
// const square = x => x * x;
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

//below is a little more common
// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = x => x * x;


//shorter syntax? is it tho..?
const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;
exports.square = square;
exports.PI = PI;

 