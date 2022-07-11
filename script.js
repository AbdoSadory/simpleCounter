const countNumberHeading = document.getElementById("count-number");
const increaseBTN = document.getElementById("increase-btn");
const resetBTN = document.getElementById("rest-btn");
const decreaseBTN = document.getElementById("decrease-btn");
let counterNumber = 0;

countNumberHeading.innerHTML = counterNumber;

function counter(countingType) {
  if (countingType === "increase") {
    counterNumber += 1;
    countNumberHeading.innerHTML = counterNumber.toString();
    console.log(counterNumber);
  } else if (countingType === "decrease") {
    counterNumber -= 1;
    countNumberHeading.innerHTML = counterNumber.toString();
    console.log(counterNumber);
  } else {
    counterNumber = 0;
    countNumberHeading.innerHTML = counterNumber.toString();
    console.log(counterNumber);
  }

  if (counterNumber > 0) {
    countNumberHeading.style.color = "green";
  } else if (counterNumber < 0) {
    countNumberHeading.style.color = "red";
  } else {
    countNumberHeading.style.color = "black";
  }
}

// we create anonymous function, bc the function needs arguments
// to not be called automatically
increaseBTN.addEventListener("click", function () {
  counter("increase");
});

resetBTN.addEventListener("click", function () {
  counter("reset");
});

decreaseBTN.addEventListener("click", function () {
  counter("decrease");
});
