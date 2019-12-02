function calculateFuel(mass) {
  return (Math.floor(mass / 3)) - 2;
}

function calculateFuelforFuel(fuelMass) {
  let totalFuel = 0;
  while(fuelMass > 0) {
    fuelMass = calculateFuel(fuelMass);
    if(fuelMass > 0) {
      totalFuel += fuelMass;
    }
  }
  return totalFuel;
}

module.exports = {calculateFuel, calculateFuelforFuel};