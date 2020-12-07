import chai from "chai";
import filter from "../src/filter.js";

describe("filter()", () => {
  //Positive tests:
  it('Should return correct elements', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }]
    const result = filter(users, ({ active }) => active);
    chai.expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
  });

  it('Should return correct elements', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
        { 'user': 'jack', 'active': true },
        { 'user': 'jason', 'active': false }
    ]
    const result = filter(users, ({ active }) => active);
    chai.expect(result).to.deep.equal([
        { 'user': 'barney', 'active': true },
        { 'user': 'jack',   'active': true }]
        );
  });

  //Negative tests:
  it('Should return [] if given predicate does not exist', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }]
    const result = filter(users, ({ notexisting }) => notexisting);
    chai.expect(result).to.deep.equal([]);
  });

  it('Should return [] if given array is empty', () => {
    const users = []
    const result = filter(users, ({ active }) => active);
    chai.expect(result).to.deep.equal([]);
  });

  it('Should throw if given a string when expecting an array', () => {
    const users = "WrongDataType"
    chai.expect( () => {filter(users, ({ active }) => active) }).to.throw();
  });
});
