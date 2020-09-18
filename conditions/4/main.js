calculate = () => {
  let salary = +document.getElementById("salary").value;
  let hours = +document.getElementById("hours").value;

  let result = "";

  if (salary < 10) {
    result = "Ask for a rise!";
  } else {
    if (hours <= 7) {
      result = hours * salary;
    } else if (7 < hours && hours <= 9) {
      let overtime50 = hours - 7;
      result = 7 * salary + overtime50 * salary * 1.5;
    } else if (hours > 9) {
      let overtime50 = 2;
      let overtime100 = hours - 9;
      result =
        7 * salary + overtime50 * salary * 1.5 + overtime100 * salary * 2;
    }
  }

  document.getElementById(
    "resultarea"
  ).innerText = `Salary for that day: ${result}. `;
};
