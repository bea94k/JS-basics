getNumbers = () => {
  let gottenNums = [],
    sumOfNums = 0;

  do {
    num = prompt("Enter a number:");
    gottenNums.push(+num);
    sumOfNums = sumOfNums + +num;

    //user presses cancel
    if (num === null) break;
  } while (gottenNums.length < 10);

  // got all needed numbers, now do stuff with them
  console.log(gottenNums);

  // find the biggest number
  let biggestNum = gottenNums[0];
  let smallestNum = gottenNums[0];

  for (let i = 0; i < gottenNums.length; i++) {
    if (gottenNums[i] > biggestNum) {
      biggestNum = gottenNums[i];
    }

    if (gottenNums[i] < smallestNum) {
      smallestNum = gottenNums[i];
    }
  }

  console.log("biggest: " + biggestNum);
  console.log("smallest: " + smallestNum);
  console.log(sumOfNums);

  document.getElementById("sum").innerHTML = sumOfNums;
  document.getElementById("average").innerHTML = sumOfNums / 10;
  document.getElementById("smallestNum").innerHTML = smallestNum;
  document.getElementById("biggestNum").innerHTML = biggestNum;
};
