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

    // helper function
    const isPrime = (number) => {
      // prime numbers are bigger than 0 and not including 0
      if (number > 0) {
        const divisibleWith = [];
        for (let i = 1; i <= number; i++) {
          if (number % i === 0) {
            divisibleWith.push(i);
          }
        }

        console.log(number + " is divisible by " + divisibleWith);

        // prime numbers are only divisible by 1 and themselves
        // divisibleWith.length = 1 for number = 1
        if (divisibleWith.length <= 2) {
          return true;
        }
      } else {
        return false;
      }
    };
    // end of helper function

    if (isPrime(num)) {
      result = `${num} is a prime number.`;
    } else {
      result = `${num} is NOT a prime number.`;
    }

    document.getElementById("resultarea").innerHTML = result;
  }
};
/* }; */
