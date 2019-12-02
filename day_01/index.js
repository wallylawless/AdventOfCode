const {calculateFuel, calculateFuelforFuel} = require("./fuelcalculator");
const fs = require("fs");

fs.readFile("./input", 'utf8', (err, contents) => {
  if(!err) {
    console.log(`Total fuel: ${JSON.stringify(calculateTotalFuel(contents))}`);
  }
});

function calculateTotalFuel(contents) {
  let totalFuel = 0;
  let totalFuelforFuel = 0;
  contents = contents.split("\n");
  contents.forEach(massInput => {
    let newFuel = calculateFuel(massInput);
    totalFuelforFuel += calculateFuelforFuel(newFuel);
    totalFuel += newFuel;
  });
  return { value: totalFuel+totalFuelforFuel};
}
