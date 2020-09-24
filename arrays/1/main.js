let numbers = [4, -5, -2, 7, 15, -9, 0, 6, 7, 2];
let resultarea;
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("numbers").innerHTML = numbers;
  resultarea = document.getElementById("resultarea");
});

printList = () => {
  resultarea.innerHTML = "";
  const numbersList = document.createElement("ol");

  for (i = 0; i < numbers.length; i++) {
    li = document.createElement("li");
    li.textContent = `number ${numbers[i]}`;
    numbersList.appendChild(li);
  }

  resultarea.appendChild(numbersList);
};

swap = () => {
  // swap -2 with index 2
  // with 0 with index 6
  // assign third element to a temp variable
  const temp = numbers[2];
  // overwrite the third element with the value of the seventh
  numbers[2] = numbers[6];
  // overwrite the seventh element with the value of the third, saved to the temp
  numbers[6] = temp;

  resultarea.innerHTML = numbers;
  document.getElementById("numbers").innerHTML = numbers;
};

sum = () => {
  let sumOfNums = 0;
  for (i = 0; i < numbers.length; i++) {
    sumOfNums += numbers[i];
  }
  resultarea.innerHTML = `Sum of numbers: ${sumOfNums}`;
};

average = () => {
  let sumOfNums = 0,
    amountOfNums = 0;
  for (i = 0; i < numbers.length; i++) {
    sumOfNums += numbers[i];
    amountOfNums++;
  }
  resultarea.innerHTML = `Average of numbers: ${sumOfNums / amountOfNums}`;
};

smallest = () => {
  let smallestNum = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNum) {
      smallestNum = numbers[i];
    }
  }
  resultarea.innerHTML = `The smallest of the numbers: ${smallestNum}`;
};

search = () => {
  const usersNum = prompt("Enter a number:");
  let counter = 0;

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] == usersNum) {
      counter++;
    }
  }

  resultarea.innerHTML = `Number ${usersNum} appears in the array ${counter} times.`;
};

beforeZero = () => {
  let numsBeforeZero = [];

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0) {
      break;
      // if "return" here, it stops the whole beforeZero() function, not just the for loop
    }
    numsBeforeZero.push(numbers[i]);
  }

  resultarea.innerHTML = `Numbers before zero in this array are: ${numsBeforeZero}`;
};
