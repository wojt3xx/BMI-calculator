const heightInput = document.querySelector(".height-input");
const weightInput = document.querySelector(".weight-input");
const calculateBtn = document.querySelector(".calculate");
const result = document.querySelector(".result");
const statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateBtn.addEventListener("click", () => {
  height = heightInput.value;
  weight = weightInput.value;

  BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);

  result.innerHTML = BMI;

  if (heightInput.value.length == 0 || weightInput.value.length == 0) {
    statement.innerText = "Please, fill all the fields correctly";
    result.innerText = "Incorrect!";
  } else {
    if (BMI < 18.5) {
      statement.innerText = "Your BMI falls within the underweight range";
      result.style.color = "#ffc44d";
    } else if (BMI > 18.5 && BMI < 24.9) {
      statement.innerText =
        "Your BMI falls within the normal or healthy weight range";
      result.style.color = "#0be881";
    } else if (BMI > 25 && BMI < 29.9) {
      statement.innerText = "Your BMI falls within the overweight range";
      result.style.color = "#ff884d";
    } else {
      statement.innerText = "Your BMI falls within the obese range";
      result.style.color = "#ff5e57";
    }
  }
});
