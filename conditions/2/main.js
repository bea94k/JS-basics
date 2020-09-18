calculate = () => {
  let a = +document.getElementById("number-a").value;
  let b = +document.getElementById("number-b").value;
  let c = +document.getElementById("number-c").value;

  let result = "";

  console.log(a, b, c);
  if (a >= 0 || b >= 0 || c >= 0) {
    result += `At least one positive, so sum is: ${a + b + c}. `;
  }

  if (a >= 0 && b >= 0 && c >= 0) {
    result += `All are positive, so multiplication is: ${a * b * c}. `;
  }

  if (a < 0 && b < 0 && c < 0) {
    result += `All are negative, so only negatives. `;
  }

  document.getElementById("resultarea").innerText = result;
};
