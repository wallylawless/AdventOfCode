class IntcodeParser {
  constructor(inputCode=null) {
    this.source = inputCode;
    this.program = this.parseIntcode(this.source);
  }

  parseIntcode(inputCode) {
    return inputCode.split(',').map((code) => {
      return parseInt(code);
    });
  }

  getProgram() {
    return this.program;
  }

  runProgram() {
    return this.execute(this.program);
  }

  resetValue(index, newVal) {
    this.program[index] = newVal;
  }

  execute(program) {
    this.program = program;
    let currentIndex = 0;
    while(currentIndex < program.length -1 && program[currentIndex]!=99) {
      const controlCode = program.slice(currentIndex,currentIndex+4);
      if(controlCode[0] === 1) {
        program[controlCode[3]] = program[controlCode[1]] + program[controlCode[2]];
      }
      else if(controlCode[0] === 2) {
        program[controlCode[3]] = program[controlCode[1]] * program[controlCode[2]];
      } else if(controlCode[0] === 99) {
          console.log(`detected 99 at ${currentIndex}, terminating`);
          break;
      } else {
        console.log(`something is wrong at ${currentIndex}, opcode is ${controlCode[0]}`);
        break;
      }

      currentIndex+=4;
    }
    return program;
  }
}

module.exports = IntcodeParser;