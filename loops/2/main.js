showResult = () => {
  const numsArray = [];

  // get all even numbers smaller than 100
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
      numsArray.push(i);
    }
  }
  // put those numbers in a new array
  // order: 2 98 4 96 6 94 ...
  const sortedNums = [];

  for (let j = 0; j <= numsArray.length / 2; j++) {
    // without the if statement it prints 50 twice in the end
    // numsArray.length / 2 in this case is 24.5
    // so the 24th time it runs, it's printing the two 50's
    if (j === Math.floor(numsArray.length / 2)) {
      sortedNums.push(numsArray[j]);
    } else {
      sortedNums.push(numsArray[j]);
      sortedNums.push(numsArray[numsArray.length - (1 + j)]);
    }
  }

  let result = "";
  for (let k = 0; k < sortedNums.length; k++) {
    result = result + sortedNums[k] + " ";
  }

  document.getElementById("resultarea").innerText = result;
};
