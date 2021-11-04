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

button.addEventListener("click",myFunction);

function myFunction() {
      const paragraph = document.createElement('p')
      let text = " ${bmiResults.value} "
      paragraph.innerText = text
      div = document.getElementById("results")
      div.appendChild(paragraph)
} 