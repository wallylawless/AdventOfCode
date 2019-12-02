const IntcodeParser = require('../IntcodeParser');

describe("Intcode parser", ()=> {

  describe("Intcode parser", () => {
    const parser = new IntcodeParser('1,0,2,3,2,2,2,1,2');
    it("should take program input in the constructor", () => {
      expect(parser.source).toBe("1,0,2,3,2,2,2,1,2");
    })
    it("should parse the input to an array", () => {
      expect(parser.getProgram()).toEqual([1,0,2,3,2,2,2,1,2]);
    })
  });

  describe("getNextBlock method", () => {
    const parser = new IntcodeParser('1,0,2,3,2,2,2,1,2');
  })

  describe("execute method", () => {
    const parser = new IntcodeParser('1,0,2,3,2,2,2,1,2');

    it("halts when the Opcode is 99", () => {
      const result = parser.execute([99,0,0,1,1]);
      expect(result).toEqual([99,0,0,1,1]);
    });
  })

  describe("Opcode 1 processing", ()=> {
    describe("examples", () => {
      it("properly executes the first example", () => {
        const parser = new IntcodeParser('1,0,0,0,99');
        expect(parser.runProgram()).toEqual([2,0,0,0,99]);
      })

      it("properly executes the second example", () => {
        const parser = new IntcodeParser('1,1,1,4,99,5,6,0,99');
        expect(parser.runProgram()).toEqual([30,1,1,4,2,5,6,0,99]);
      })
    })
  });
})