const BMICalculator = require('../src/js/bmiCalculator')

subject = new BMICalculator();

describe('BMICalculator', () => {
    describe('#calculateMetric()', () => {
        describe('Mathias', ()=> {

            let results
            beforeEach(() => {
            results = subject.calculateMetric({ height: 1.75, weight: 73 })
          });

            it('is expected to return a numeric value (Float with 2 decimals) if given proper arguments', () => {
                expect(results.value).toEqual(23.84)
            });

            it('is expected to return a classification of "Normal weight"', () => {
                expect(results.classification).toEqual('Normal weight')
            });
        });

        describe('Thomas', ()=> {

            let results
            beforeEach(() => {
            results = subject.calculateMetric({ height: 1.86, weight: 105 })
          });

            it('is expected to return a numeric value (Float with 2 decimals) if given proper arguments', () => {
                expect(results.value).toEqual(30.35)
            });

            it('is expected to return a classification of "Obesity Class 1"', () => {
                expect(results.classification).toEqual('Obesity Class 1')
            });
        });

        describe('Jaba The Hut', ()=> {

            let results
            beforeEach(() => {
            results = subject.calculateMetric({ height: 1.46, weight: 205 })
          });

            it('is expected to return a numeric value (Float with 2 decimals) if given proper arguments', () => {
                expect(results.value).toEqual(96.17)
            });

            it('is expected to return a classification of "Extreme Obesity Class"', () => {
                expect(results.classification).toEqual('Extreme Obesity Class')
            });
        });
    });
});