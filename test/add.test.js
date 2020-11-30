import chai from 'chai';
const expect = chai.expect;

//functions tested
import add from '../src/add.js';

describe('Add.js', () => {

    it('should return correct sum', () => {
        const number1 = 5;
        const number2 = 7;
        const sum = add(number1, number2);
        expect(sum).to.equal(number1 + number2);
      });

});
