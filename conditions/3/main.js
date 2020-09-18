calculate = () => {
  let a = +document.getElementById("number-a").value;

  let result = "";

  if (a > 0 && a % 2 !== 0) {
    result = "The number is positive and NOT divisible by 2.";
  } else if (a > 0 && a % 2 === 0) {
    result = "The number is positive and divisible by 2.";
  } else if (a <= 0 && a % 2 !== 0) {
    result = "The number is NOT positive and NOT divisible by 2.";
  } else if (a <= 0 && a % 2 === 0) {
    result = "The number is NOT positive but IS divisible by 2.";
  }

  document.getElementById("resultarea").innerText = result;
};
