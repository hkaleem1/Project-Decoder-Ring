const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybiusModule", () => {
    it("should return false if input length without spaces is not even while decoding", () => {
        const actual = polybius("2224 234 15", false);
        expect(actual).to.be.false;
    });
    it("should return a string when encoding", () => {
        const actual = polybius("word");
        expect(actual).to.be.a('string');
    });
    it("should encode correctly", () => {
        const expected = "44513444 245433";
        const actual = polybius("test run");
        expect(actual).to.equal(expected);
    });
    it("should encode i/j correctly", () => {
        const expected = "32422232 42542353";
        const actual = polybius("high jump");
        expect(actual).to.equal(expected);
    });
    it("should decode correctly", () => {
        const expected = "test run";
        const actual = polybius("44513444 245433", false);
        expect(actual).to.equal(expected);
    });
    it("should decode i/j correctly", () => {
        const expected = "hi/jgh i/jump";
        const actual = polybius("32422232 42542353", false);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and ignore capitals while encoding", () => {
        const expected = "42 1123 2351";
        const actual = polybius("I Am Me");
        expect(actual).to.equal(expected);
    });
});