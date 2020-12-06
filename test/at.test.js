import chai from "chai";
import at from "../src/at.js";

describe("at", () => {
  //Positive tests:
  it('Should return [3, 4] for (object, ["a[0].b.c", "a[1]"])', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].b.c', 'a[1]']);
    chai.expect(result).to.deep.equal([3, 4]);
  });

  it('Should return [3, 4, "Test", 4, 5]', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4], 'd': [{ 'b': "Test" }, 4, 5] };
    const result = at(object, ['a[0].b.c', 'a[1]', 'd[0].b', 'd[1]', 'd[2]']);
    chai.expect(result).to.deep.equal([3, 4, "Test", 4, 5]);
  });

  it('Should return [3] for ({"a": [1,2,3,4]}, "a[2]")', () => {
    const object = {'a': [1,2,3,4]};
    const result = at(object, 'a[2]');
    chai.expect(result).to.deep.equal([3]);
  });

  it('Should return [1] for ({"a": 1}, "a")', () => {
    const object = {'a': 1};
    const result = at(object, 'a');
    chai.expect(result).to.deep.equal([1]);
  });

  //Negative tests:
  it('Should return undefined for ({"a": 1}, "b")', () => {
    const object = {'a': 1};
    const result = at(object, 'b');
    chai.expect(result).to.deep.equal([undefined]);
  });

  it('Should return undefined if given index does not exist)', () => {
    const object = {'a': [1,2,3,4]};
    const result = at(object, 'a[10]');
    chai.expect(result).to.deep.equal([undefined]);
  });
});
