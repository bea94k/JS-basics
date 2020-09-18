getNumbers = () => {
  let gottenNums = [];
  do {
    num = prompt("Enter a number:");
    gottenNums.push(+num);
    //user presses cancel
    if (num === null) return;
  } while (gottenNums.length < 20);
  // first time it gets to while, length is 0

  // got all 20 numbers, now do stuff with them
  console.log(gottenNums);
  let evenNums = [];
  for (let number of gottenNums) {
    if (number % 2 === 0) {
      evenNums.push(number);
    }
  }

  document.getElementById(
    "resultarea"
  ).innerHTML = `Out of the numbers, ${evenNums.length} were even.`;
};
