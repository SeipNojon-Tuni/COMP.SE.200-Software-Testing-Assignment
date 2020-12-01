import chai from 'chai';
const expect = chai.expect;

//functions tested
import add from '../src/add.js';

describe('Add.js', () => {

    it('should return correct sum with two positive numbers', () => {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 100);
        const sum = add(number1, number2);
        expect(sum).to.equal(number1 + number2);
      });

      it('should return correct sum with two negative numbers', () => {
        const number1 = -(Math.floor(Math.random() * 100));
        const number2 = -(Math.floor(Math.random() * 100));
        const sum = add(number1, number2);
        expect(sum).to.equal(number1 + number2);
      });

      it('should return correct sum with positive and negative number', () => {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = -(Math.floor(Math.random() * 100));
        const sum = add(number1, number2);
        expect(sum).to.equal(number1 + number2);
      });

      it('should return correct sum with zero', () => {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = 0;
        const sum = add(number1, number2);
        expect(sum).to.equal(number1 + number2);
      });

      it('MAX_SAFE_INTEGER + 100 should NOT return MAX_SAFE_INTEGER', () => {
        const number1 = Number.MAX_SAFE_INTEGER;
        const number2 = 100;
        const sum = add(number1, number2);
        expect(sum).to.not.equal(number1);
      });

      it('should NOT add number 100 and string "Word"', () => {
        const number1 = 100;
        const number2 = "Word";
        const sum = add(number1, number2);
        expect(sum).to.not.equal(number1 + number2);
      });

      it('should NOT add number and array', () => {
        const number1 = 100;
        const number2 = [];
        const sum = add(number1, number2);
        expect(sum).to.not.equal(number1 + number2);
      });

});
