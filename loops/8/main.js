getNumbers = () => {
  let gottenNums = [];

  // take the input and make it an integer
  const amountOfNumsInput = prompt("How many numbers do you want to give me?");
  const amountOfNums = parseInt(amountOfNumsInput, 10);
  console.log(amountOfNumsInput);
  console.log(amountOfNums);

  if (isNaN(amountOfNums)) {
    alert(`${amountOfNumsInput} doesn't seem to be a number.`);
  } else {
    do {
      num = prompt("Enter a number:");
      gottenNums.push(+num);

      //user presses cancel
      if (num === null) break;
    } while (gottenNums.length < amountOfNums);

    // got all needed numbers, now do stuff with them
    console.log(gottenNums);

    let smallestNum = gottenNums[0];

    for (let i = 0; i < gottenNums.length; i++) {
      if (gottenNums[i] < smallestNum) {
        smallestNum = gottenNums[i];
      }
    }

    document.getElementById(
      "resultarea"
    ).innerHTML = `Out of the numbers, ${smallestNum} was the smallest.`;
  }
};
