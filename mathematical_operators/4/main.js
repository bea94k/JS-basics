const calculate = () => {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  let result = (weight / Math.pow(height, 2)).toFixed(1);

  document.getElementById("resultarea").innerText = result;

  let resultText = "";

  if (result < 18.5) {
    resultText = "Underweight";
  } else if (result >= 18.5 && result <= 24.9) {
    resultText = "Healthy weight";
  } else if (result >= 25.0 && result <= 29.9) {
    resultText = "Overweight";
  } else if (result >= 30.0) {
    resultText = "Obese";
  }

  document.getElementById("resulttextarea").innerText = resultText;
};
