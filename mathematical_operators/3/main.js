const calculate = () => {
  let inches = document.getElementById("inches").value;

  let result = inches * 2.54;

  document.getElementById("inchesResult").innerText = inches;
  document.getElementById("centimetersResult").innerText = result;
};
