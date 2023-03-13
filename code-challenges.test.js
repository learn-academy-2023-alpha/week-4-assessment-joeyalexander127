// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

describe("shuffle", ()=> {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("Removes first index and returns shuffled array", ()=> {
    expect(shuffle(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(shuffle(colors2)).toEqual(expect.arrayContaining([
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]))

})
})
//------ TEST CASE FAILING DUE TO UNDEFINED FUNCTION-----
// FAIL  ./code-challenges.test.js
// shuffle
//   ✕ Removes first index and returns shuffled array (1 ms)
// ● shuffle › Removes first index and returns shuffled array
//   ReferenceError: shuffle is not defined

// b) Create the function that makes the test pass.

//------Pseudo Code------
// --input: Given array
// --out: Randomized array with initial index[0] removed
// create a function called <shuffle> that takes in an array as a parameter
// Use the built in method for arrays called <splice(1)> with an argument of 1 to remove first index of the array
// then sort the array by using the math.random () built in method.
// By using the call backfunction of <(a,b) => .5 - Math.random())> it returns either a positive number or a negative number with 50% chances of negative or postive. which means that the two elements (a,b) that the call back function is currently looking at will place the positive number first and the negative number second. Therefore, there is a 50/50 of which element goes first within the scope of the two elements the call back function is currently looking. (Only catch is there is a very very small chance that the original array can be returned. But i guess you can say it was still shuffled :) ) 
// return the spliced and randomly sorted array.

const shuffle = (array) => {
return array.splice(1).sort((a,b)=> .5 - Math.random())  
}

//------ TEST CASE PASSING WITH FUNCTION------
// PASS ./code-challenges.test.js
//   shuffle
//   ✓ Removes first index and returns shuffled array (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("endTally", ()=> {
  const votes1 = { upVotes: 13, downVotes: 2 }
  // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 }
  // Expected output: -31
  it("Returns the upvotes minus the down votes", ()=> {
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)
  })
})
//------ TEST CASE FAILING DUE TO FUNCTION NOT BEING DEFINED-----
// FAIL  ./code-challenges.test.js
// endTally
//   ✕ Returns the upvotes minus the down votes (10 ms)

// ● endTally › Returns the upvotes minus the down votes

//   ReferenceError: endTally is not defined

// b) Create the function that makes the test pass.
//------PSEUDO CODE-------
//---input: object
//---- putput: integer 
// create a function called endTally that takes in a given object
// declare an empty that takes the values from the Object using the Object.values(object) built in method
// apply a negative to the down votes values and then add the two indexs together in the array to get the end tally of the votes.

const endTally = (object) => {
  const newArray = Object.values(object)
  return newArray[0] + (newArray[1] * -1) 
}

//------ TEST CASE PASSING WITH FUNCION------
// PASS  ./code-challenges.test.js
// endTally
//   ✓ Returns the upvotes minus the down votes (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDuplicates", ()=> {
  it("Combines arrays and removes duplicates", ()=> {
      const dataArray1 = ["array", "object", "number", "string", "Boolean"]
      const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
      // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(noDuplicates(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
//-------FAILED TEST DUE TO FUNCTION NOT DEFINED------
// FAIL  ./code-challenges.test.js
// noDuplicates
//   ✕ Combines arrays and removes duplicates (1 ms)
// ● noDuplicates › Combines arrays and removes duplicates
//   ReferenceError: noDuplicates is not defined

// b) Create the function that makes the test pass.
//-------Pseudo Code-------
// INPUT: two seperate arrays
// OUTPUT: single array (with no duplicates)
// Create a function called noDuplicates with parameters of array1 & array 2
// create a new array called setArray
// make the new array equal to the two argument arrays concated and apply the <...new Set>
// spread operator on them which will remove duplicates
// return the setArray

const noDuplicates = (array1, array2) => {
const setArray = [...new Set(array1.concat(array2))]
return setArray
}

//----- PASSING TEST WITH FUNCTION-----
// PASS  ./code-challenges.test.js
// noDuplicates
//   ✓ Combines arrays and removes duplicates (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



//-------ALL TEST CASES PASSING------
// PASS  ./code-challenges.test.js
// shuffle
//   ✓ Removes first index and returns shuffled array (2 ms)
// endTally
//   ✓ Returns the upvotes minus the down votes (1 ms)
// noDuplicates
//   ✓ Combines arrays and removes duplicates
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total