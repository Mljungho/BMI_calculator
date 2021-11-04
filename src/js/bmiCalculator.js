class BMICalculator {
  calculateMetric(options) {
    const weight = parseFloat(options.weight);
    const height = parseFloat(options.height);
    const bmiValue = (weight / (height * height)).toFixed(2);
    const bmiResults = {
      value: parseFloat(bmiValue),
      classification: this.getBMIClassification(parseFloat(bmiValue)),
    };
    console.log(bmiResults);
    return bmiResults;
  }

  getBMIClassification(value) {
    if (value < 18.5) {
      return "underweight";
    } else if (value < 24.9) {
      return "Normal weight";
    } else if (value < 29.9) {
      return "Overweight";
    } else if (value < 34.9) {
      return "Obesity Class 1";
    } else if (value < 39.9) {
      return "Obesity Class 2";
    } else {
      return "Extreme Obesity Class";
    }
  }
}


let button = document.querySelector("button");
let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
const resultDiv = document.getElementById("results");

button.addEventListener("click", () =>
  new BMICalculator().calculateMetric({
    height: heightInput.value,
    weight: weightInput.value,
}))


 
if (typeof module !== "undefined" && module.exports) {
  module.exports = BMICalculator;
}

function onCalculateClick() {
      let weightInput = document.getElementById("weight").valueAsNumber;
      let heightInput = document.getElementById("height").valueAsNumber;
      const resultDiv = document.getElementById("results");
      //if (isNaN(weight) || isNaN(height)) {
     //   resultDiv.innerHTML = "<h2>Please specify your weight and height!</h2>";
     // } else if (height === 0) {
      //  resultDiv.innerHTML = "<h2>Are you really THAT short?</h2>";
     // } else if (height < 0 || weight < 0) {
      //  resultDiv.innerHTML = "<h2>Please write positive values!</h2>";
     // } else {
        const calculator = new BMICalculator();
        const result = calculator.calculateMetric({
          weight: weight,
          height: height,
        });
        resultDiv.innerHTML = `<h2>Your BMI value is <strong>${result.value}</strong> and you are in <strong>${result.clasification}</strong> category! </h2>`;
      }
   // }
    
    button = document.getElementById("Calculate");
    button.addEventListener("click", onCalculateClick);