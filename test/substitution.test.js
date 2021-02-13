const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should return false if alphabet is not given", () => {
        const actual = substitution("abc");
        expect(actual).to.be.false;
    });
    it("should return false if alphabet.length is less than 26", () => {
        const actual = substitution("abc", "xplijygrdwa");
        expect(actual).to.be.false;
    });
    it("should return false if alphabet.length is more than 26", () => {
        const actual = substitution("abc", "!abcdefghijklmnopqrstuvwxyz");
        expect(actual).to.be.false;
    });
    it("should return false if alphabet has repeats", () => {
        const actual = substitution("abc", "qwertyuioplkjhgfdsazxcvbna");
        expect(actual).to.be.false;
    });
    it("should encode correctly and ignore capital letters", () => {
        const expected = "eiqos rtal";
        const actual = substitution("Chair desk", "qwertyuioplkjhgfdsazxcvbnm");
        expect(actual).to.equal(expected);
    });
    it("should decode correctly", () => {
        const expected = "desk chair";
        const actual = substitution("rtal eiqos", "qwertyuioplkjhgfdsazxcvbnm", false);
        expect(actual).to.equal(expected);
    });
    it("should decode with special characters correctly", () => {
        const expected = "desk chair book";
        const actual = substitution("rt#l eiq)s wggl", "qwertyui)plkjhgfds#zxcvbnm", false);
        expect(actual).to.equal(expected);
    });
});