/* 
promises is one of the cool feature in Javascript
which actually works like threads in python and C
programming where we can have our customised feature
where we can create an illusion to run Js operations
parallely. Because Javascript is a single threaded 
language, running it sequentially decreases the speed
of webpage and browser, it is better to use promises,
async, await feature and setTimeOut
*/

//This is a basic simple example of how set time out takes
// a function and timer to make one operation take some time
// while other consoles get printed. Basic version of asynchronous 
// programming
console.log("Hi");

setTimeout(() => {
    console.log("I will wait to print");
}, 3000);
setTimeout

console.log("Meanwhile I will get printed");
console.log("I will also get printed");