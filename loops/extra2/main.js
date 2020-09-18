showResult = () => {
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

  // the proper loop

  let amountOfNums = 0,
    num = 1, //the number being analyzed in do-while;
    primeNums = "";

  do {
    if (isPrime(num)) {
      primeNums = primeNums + num + " ";
      amountOfNums++;
    }

    num++;
  } while (amountOfNums < 20);

  console.log(primeNums);

  document.getElementById("resultarea").innerText = primeNums;

  // TESTING
  // console.log(-2);
  // console.log(isPrime(-2));
  // console.log(-1);
  // console.log(isPrime(-1));
  // console.log(0);
  // console.log(isPrime(0));
  // console.log(1);
  // console.log(isPrime(1));
  // console.log(2);
  // console.log(isPrime(2));
  // console.log(6);
  // console.log(isPrime(6));
  // console.log(5);
  // console.log(isPrime(5));
};
