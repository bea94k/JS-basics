const calculate = () => {
  let age = document.getElementById("age").value;

  if (age < 18) {
    result = "Too young.";
  } else if (age >= 18 && age < 27) {
    result = "Right age for military service.";
  } else if (age >= 27 && age < 41) {
    result = "You are in reserve.";
  } else if (age >= 41 && age < 55) {
    result = "You are in backup reserve.";
  } else {
    result = "Too old.";
  }
  document.getElementById("resultarea").innerText = result;
};
