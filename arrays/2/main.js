randomNumbers = () => {
  // array of 40 elements with value of 0
  numArray = new Array(40);
  //console.log(numArray.length);
  numArray.fill(0);
  //console.log(numArray);
  counter = 0;

  do {
    //generate a random number from 0 to 39 (indexes in numArray)
    randomNum = Math.floor(Math.random() * Math.floor(40));

    // if the random number wasn't chosen yet, do stuff
    if (numArray[randomNum] === 0) {
      numArray[randomNum] = 1;

      counter++;
    }
  } while (counter < 7);

  let luckyNumbers = [];
  for (i = 0; i < 40; i++) {
    if (numArray[i] === 1) {
      luckyNumbers.push(i + 1);
    }
  }

  document.getElementById(
    "resultarea"
  ).innerHTML = `Your lucky numbers are: ${luckyNumbers}`;
};
