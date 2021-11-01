class BMICalculator {
    calculateMetric(options) {
        const weight = options.weight
        const height = options.height
        const bmiValue = (weight / (height * height)).toFixed(2)
        const bmiResults = {
            value: parseFloat(bmiValue),
            classification: this.getBMIClassification(parseFloat(bmiValue))
        }
        return bmiResults
    }

    getBMIClassification(value) {
      //  return "Obesity Class 1"
      if (value < 18.5) {
            return 'underweight'
      } else if (value < 24.9) {
            return 'Normal weight'
      } else if (value < 29.9) {
            return 'Overweight'
      } else if (value < 34.9) {
            return 'Obesity Class 1'
      } else if (value < 39.9) {
            return 'Obesity Class 2'
      } else {
        return 'Extreme Obesity Class'
     }
    }
}
if (window?.module) {
    module.exports = BMICalculator
}