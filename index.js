function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const number = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === number) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n2) -nested loop
*/

/* 
  Add your pseudocode here

  loop through the array with a for loop for our first index

  declares a variable called number that is equal to target meaning array[i]

  loops through the array again for our second index

  if the array[second index] is equal to our number
  return true
    else
  return false
*/

/*
  Add written explanation of your solution here
  
  returns true if any set of two numbers sums up to equal the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
