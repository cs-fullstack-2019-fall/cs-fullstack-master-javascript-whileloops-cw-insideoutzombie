// # JavaScript-whileloops-cw
// Classwork: JavaScript While/Do While Loops

// #### CW1
// Print -10 through 5 using a counter and while loop.
var counter = -11;

while (counter < 5) {
  counter++;
  console.log(counter);
}
//
// // #### CW2
// // Write a While loop that counts backwards from 10 to 0
// // Log the current count at the end of each iteration EXCEPT if the current count is ```5```
var currentCount = 10;

while (currentCount >= 0) {
  if (currentCount === 5) {
    currentCount = currentCount - 1;
  }
  else {
    console.log(currentCount);
    currentCount = currentCount - 1;
  }
}


// #### CW3
// Asks the user ```Enter a word. Enter 'q' to quit.```
// Create a while loop that will not quit until they enter 'q'.
var password = "q";
var isvalid = false;

while (!isvalid) {
  var entry = prompt("Enter a word. Enter 'q' to quit.");
  if (entry === password) {
    isvalid = true;
  }
}

// #### Extra
// Expand your knowledge of Loops by reading the Loop and Iteration section on MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
