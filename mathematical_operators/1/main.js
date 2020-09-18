const calculate = () => {
  let price = document.getElementById("price").value;
  let money = document.getElementById("money").value;

  let result = money / price;
  document.getElementById("resultarea").innerText = result;
};
