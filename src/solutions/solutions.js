// Challenges: note, all current challenge solutions are wrong

// Challenge 1 -> arrow function that returns the number 3
// arrow functions are like normal functions except they have their own instances (this keyword)
// note: => 3; and =>{ return 3} are the same
// Solution:
export const arrowGivesThree = () => 3;

/*  Challenge 2 -> given the array of numbers, map the string "odd" or "even" to them based on being odd or even.
    expected result example: "12: is even" or "17: is odd"
    results must have this exact output ^^ */
//   Solution:
const myNums = [12, 13, 16, 17, 8, 32, 33];
export const numsWithOddOrEven = myNums.map((num) => {
  if (num % 2 === 0) return num + ": is even";
  else return num + ": is odd";
});

/*  Challenge 3 -> get the average dollar amount from the dollaz array using reduce */
//   Solution:
const dollaz = [23.64, 252.5, 765.8, 2500.19];
export const averageDollaz = dollaz.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return (total / array.length).toFixed(2);
  } else {
    return total;
  }
});

/* Challenge 4 ->  Make a fetch to the api  "https://jsonplaceholder.typicode.com/todos/1" and return
 a promise with the json object from the response. */
//   Solution:
export const promiseWithTitle = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data.title;
  });

/* Challenge 5 -> export an array with 1 on each end using the spread operator */
//   Solution:
const arrayToSpread = [12, 7, 8, 2, 3, 1, 6, 3, 6, 2];
export const spreadedArray = [1, ...arrayToSpread, 1];

/* Challenge 6 -> create a generator function that pushes the values 5,15, 25, 7
 into the generatorArray by using the "next" function */
//   Solution:
let generatorArray = [];
function* generator(index) {
  yield index;
  yield index + 10;
  yield index + 20;
  yield index + 2;
}
const myGenerator = generator(5);
generatorArray.push(myGenerator.next().value);
generatorArray.push(myGenerator.next().value);
generatorArray.push(myGenerator.next().value);
generatorArray.push(myGenerator.next().value);
export { generatorArray };
