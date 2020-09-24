const storage = [
  {
    licence: "ABC-123",
    maker: "fiat",
    model: "maluch",
    price: 500,
    color: "white",
  },
  {
    licence: "IS-ME",
    maker: "ferrari",
    model: "fast",
    price: 140000,
    color: "red",
  },
  {
    licence: "XYZ-777",
    maker: "motoguzzi",
    model: "v7 stone",
    price: 7000,
    color: "green",
  },
];
//
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//
//
document.addEventListener("DOMContentLoaded", () => {
  // submitting the ADD NEW VEHICLE form
  document.getElementById("form-add").addEventListener("submit", (e) => {
    e.preventDefault();

    const newCar = {
      licence: e.target.licence.value.toUpperCase(),
      maker: e.target.maker.value.toLowerCase(),
      model: e.target.model.value.toLowerCase(),
      price: e.target.price.value,
      color: e.target.color.value.toLowerCase(),
    };

    storage.push(newCar);
    console.log(storage);
  });

  // SEARCH BY LICENCE PLATE
  document.getElementById("form-search").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("searching...");
    let foundVehicle, result;

    for (let vehicle of storage) {
      if (vehicle.licence === e.target.licence.value.toUpperCase()) {
        foundVehicle = vehicle;
      }
      //if nothing found, returns undefined
    }

    if (foundVehicle) {
      result = `Found vehicle: ${capitalize(foundVehicle.maker)} ${capitalize(
        foundVehicle.model
      )}`;
    } else {
      result = "No vehicle with that licence plate found.";
    }

    document.getElementById("search-result").innerHTML = result;
  });

  // CHECK DISCOUNT BY LICENCE PLATE
  document.getElementById("form-discount").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("checking for discount...");

    let foundVehicle, result;

    // search for vehicle by licence plate
    for (let vehicle of storage) {
      if (vehicle.licence === e.target.licence.value.toUpperCase()) {
        foundVehicle = vehicle;
      }
      //if nothing found, returns undefined
    }

    if (foundVehicle) {
      // DISCOUNT
      const countDiscount = (vehicle) => {
        const price = vehicle.price;
        let discountAmount;

        if (price > 20000) {
          return (discountAmount = price * 0.25);
        } else if (price < 5000) {
          return (discountAmount = price * 0.1);
        } else {
          return (discountAmount = price * 0.15);
        }
      };

      const price = foundVehicle.price;
      const discount = countDiscount(foundVehicle);

      result = `Found vehicle with price ${price}. The discount is ${discount}, so the end price is ${
        price - discount
      }`;
    } else {
      result = "No vehicle with that licence plate found.";
    }

    document.getElementById("discount-result").innerHTML = result;
  });
});
