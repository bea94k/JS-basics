showResult = () => {
  let result = "";

  for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
      console.log("found an odd number: ", i);
      result += `${i} `;
    }

    document.getElementById("resultarea").innerText = result;
  }
};
