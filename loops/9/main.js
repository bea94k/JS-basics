getNumbers = () => {
  let gottenNums = [];

  do {
    num = prompt("Enter a number:");
    gottenNums.push(+num);

    //user presses cancel
    if (num === null) break;
  } while (gottenNums.length < 10);

  // got all needed numbers, now do stuff with them
  console.log(gottenNums);

  // find the biggest number
  let biggestNum = gottenNums[0];

  for (let i = 0; i < gottenNums.length; i++) {
    if (gottenNums[i] > biggestNum) {
      biggestNum = gottenNums[i];
    }
  }

  console.log("biggest: " + biggestNum);

  // find secon biggest number
  let secondBiggestNum;
  if (gottenNums[0] === biggestNum) {
    secondBiggestNum = gottenNums[1];
  } else {
    secondBiggestNum = gottenNums[0];
  }

  for (let j = 0; j < gottenNums.length; j++) {
    // if the next analyzed number is the biggest number, skip
    if (gottenNums[j] !== biggestNum) {
      if (gottenNums[j] > secondBiggestNum) {
        secondBiggestNum = gottenNums[j];
      }
    }
  }

  console.log("second biggest: " + secondBiggestNum);

  document.getElementById(
    "resultarea"
  ).innerHTML = `Out of the numbers, the biggest was ${biggestNum} and second biggest was ${secondBiggestNum}.`;
};
