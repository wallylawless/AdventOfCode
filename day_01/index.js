const calculateFuel = require("./fuelcalculator");
const fs = require("fs");

fs.readFile("./input", 'utf8', (err, contents) => {
  if(!err) {
    console.log(`Total fuel: ${calculateTotalFuel(contents)}`);
  }
});

function calculateTotalFuel(contents) {
  let totalFuel = 0;
  console.log(contents);
  contents = contents.split("\n");
  contents.forEach(massInput => {
    totalFuel += calculateFuel(massInput);
  });
  return totalFuel;
}
