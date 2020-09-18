getNumbers = () => {
  // take the input and make it an integer
  const numInput = prompt(
    "What integer number do you want to analyze?\n(If you enter a number that is not an integer, I'll round it down.)"
  );
  const num = parseInt(numInput, 10);
  console.log(numInput);
  console.log(num);

  if (isNaN(num)) {
    alert(`${numInput} doesn't seem to be a number.`);
  } else {
    // here the num is an integer

    let divisibleWith = "";

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        divisibleWith = divisibleWith + i + " ";
      }
    }

    document.getElementById("resultarea").innerHTML = divisibleWith;
  }
};
/* }; */
