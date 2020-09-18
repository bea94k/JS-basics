getNumbers = () => {
  let sumOfNums = 0,
    amountOfNums = 0;
  do {
    num = prompt("Enter a number:");
    //user presses cancel - counts average of the numbers so far
    if (num === null) break;
    //user enters 0
    if (num == 0) break;

    sumOfNums = sumOfNums + +num;
    amountOfNums++;
  } while (num != 0);

  console.log(sumOfNums);
  console.log(amountOfNums);

  document.getElementById(
    "resultarea"
  ).innerHTML = `The average of your numbers is ${sumOfNums / amountOfNums}`;
};
