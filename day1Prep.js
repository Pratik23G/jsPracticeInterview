"using strict"


const createVault = (userInput) => {

    let secretCode = userInput;

    return awesomeResult = {
        getCode: () => secretCode,
        setCode: (newCode) => secretCode = newCode,
    };
}

// 1. Initialize your vault
const myVault = createVault("InitialSecret123");

// TEST CASE 1: Can you retrieve the secret using the method?
console.log("Test 1 - Get Code:", myVault.getCode() === "InitialSecret123" ? "PASSED" : "FAILED");


// TEST CASE 2: Can you update the secret?
myVault.setCode("NewSecret456");
console.log("Test 2 - Update Code:", myVault.getCode() === "NewSecret456" ? "PASSED" : "FAILED");

// TEST CASE 3: Is the data truly encapsulated? 
// This is the most important part of a closure. The variable should not be 
// a property of the object itself.
console.log("Test 3 - Privacy Check:", myVault.secretCode === undefined ? "PASSED" : "FAILED");

// TEST CASE 4: Independence Check
// Does creating a second vault interfere with the first? 
// Each call to createVault should create a new lexical environment in the heap.
const secondVault = createVault("OtherSecret");
console.log("Test 4 - Independence:", myVault.getCode() !== secondVault.getCode() ? "PASSED" : "FAILED");