const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesarModule", () => {
  it("should return false if shift id not given", () => {
    const actual = caesar("abcd");
    expect(actual).to.be.false;
  });
  it("should return false if shift is 0", () => {
    const actual = caesar("abcd", 0);
    expect(actual).to.be.false;
  });
  it("should return false if shift is < -25", () => {
    const actual = caesar("abcd", -30);
    expect(actual).to.be.false;
  });
  it("should return false if shift is > 25", () => {
    const actual = caesar("abcd", 26);
    expect(actual).to.be.false;
  });
  it("should shift letters forward by 4", () => {
    const expected = "efg";
    const actual = caesar("abc", 4);
    expect(actual).to.equal(expected);
  });
  it("should shift letters backward by 3", () => {
    const expected = "abc";
    const actual = caesar("def", -3);
    expect(actual).to.equal(expected);
  });
  it("should ignore the capital letters", () => {
    const expected = "uvwx";
    const actual = caesar("PQRS", 5);
    expect(actual).to.equal(expected);
  });
  it("maintains the spaces and nonalphabetic symbols", () => {
    const expected = "#h e l l o!!";
    const actual = caesar("#g d k k n!!", 1);
    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the alphabet (3 shifts forward from z should give c)", () => {
    const expected = "abcdef";
    const actual = caesar("uvwxyz", 6);
    expect(actual).to.equal(expected);
  });
  it("should decode input if encode is passed as false", () => {
    const expected = "abc";
    const actual = caesar("def", 3, false);
    expect(actual).to.equal(expected);
  });
});
