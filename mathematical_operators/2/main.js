const calculate = () => {
  let distance = document.getElementById("distance").value;
  let time = document.getElementById("time").value;

  //result = (distance / time).toFixed(2);
  let result = Math.round((distance / time) * 100) / 100;

  document.getElementById("resultarea").innerText = result;
};
