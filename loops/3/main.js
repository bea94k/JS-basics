calculate = () => {
  do {
    distance = prompt("Enter distance in km:");
    console.log("dist: " + distance);
    //user presses cancel
    if (distance === null) return;

    // user gives distance = 0 - A STRING!
    if (distance == 0) return;
    let time = prompt("Enter time in h:");
    console.log("time: " + time);
    //user presses cancel
    if (time === null) return;

    //result = (distance / time).toFixed(2);
    let result = Math.round((distance / time) * 100) / 100;
    alert(`Your average speed this time is ${result} km/h.`);
  } while (distance !== 0);
};
