getNumbers = () => {
  let sumOfNums = 0,
    amountOfNums = 0;
  do {
    num = prompt("Enter a number:");
    //user presses cancel - counts average of the numbers so far
    if (num === null) break;

    sumOfNums = sumOfNums + +num;
    amountOfNums++;
  } while (amountOfNums < 25);

  // got all 25 numbers, now do stuff with them
  console.log(sumOfNums);
  console.log(amountOfNums);

  document.getElementById(
    "resultarea"
  ).innerHTML = `The average of your numbers is ${sumOfNums / amountOfNums}`;
};
