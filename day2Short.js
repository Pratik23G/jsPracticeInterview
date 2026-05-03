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

// async -> makes a function return a promise
// await -> makes a function wait for a promise

/* 
What the hell is Promise? Well promise is an object
that manages asynchronous operations
Ex: "I promise to return you this pen after using it"
Can be PENDING, RESOLVED OR REJECTED

source code syntax
new Promise((resolve, reject) => {some code to make asynchronous work} )

*/

function walk5miles(callback){

    setTimeout(() => {
        console.log("You have finished 5 miles run");
        callback();
    }, 1500);

}

function takeRest(callback){

    setTimeout(() => {
        console.log("You need to take some break");
        callback();
    }, 3000);
}

walk5miles(() => {
    takeRest(() => {
        console.log("You have finished the race");
    });
});


// this is okay for this simple function to use callback, 
// but what if we had multiple functions with many callbacks
// we go to callback hell that is why we use promises which I will code
// more tonight
