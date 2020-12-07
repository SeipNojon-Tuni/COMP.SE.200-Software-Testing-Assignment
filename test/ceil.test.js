import chai from "chai";
import ceil from "../src/ceil.js";

describe("ceil()", () => {
  //Positive tests
  it("Should return 5 for (4.006)", () => {
    const result = ceil(4.006);
    chai.expect(result).to.equal(5);
  });

  it("Should return 6.01 for (6.004, 2)", () => {
    const result = ceil(6.004, 2);
    chai.expect(result).to.equal(6.01);
  });

  it("Should return 6100 for (6040, -2)", () => {
    const result = ceil(6040, -2);
    chai.expect(result).to.equal(6100);
  });

  it("Should return 7000 for (6040, -3)", () => {
    const result = ceil(6040, -3);
    chai.expect(result).to.equal(7000);
  });

  it("Should return 10000 for (6040, -4)", () => {
    const result = ceil(6040, -4);
    chai.expect(result).to.equal(10000);
  });

  //Negative test
  it("Should return 6.004 for (6.004, 10) because precision is too big", () => {
    const result = ceil(6.004, 10);
    chai.expect(result).to.equal(6.004);
  });

  it("Should return 1000 for (100, 3)", () => {
    const result = ceil(100, 3);
    chai.expect(result).to.equal(1000);
  });
});
