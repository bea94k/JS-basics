getNumbers = () => {
  let sumOfNums = 0,
    amountOfNums = 0;
  do {
    num = prompt("Enter a number:");
    //user presses cancel - counts average of the numbers so far
    if (num === null) break;

    sumOfNums = sumOfNums + +num;
    amountOfNums++;

    shouldContinue = prompt(
      "Do you want to continue giving me numbers?\n(Type y for yes or n for no)"
    ).toLowerCase();
  } while (shouldContinue == "y");

  // when the answer is not 'y' anymore, do stuff with the numbers
  console.log(sumOfNums);
  console.log(amountOfNums);

  document.getElementById(
    "resultarea"
  ).innerHTML = `The average of your numbers is ${sumOfNums / amountOfNums}`;
};
