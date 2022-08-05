import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });
const currentAge = await rl.question("What is your age? ");
const retirementAge = await rl.question("What age would you like to retire? ");

rl.close();

const yearsToRetirement = retirementAge - currentAge;
const currentYear = new Date().getFullYear();
const retirementYear = currentYear + yearsToRetirement

const message = `
You have ${yearsToRetirement} years left until you can retire.

It's ${currentYear}, so you can retire in ${retirementYear}

`

console.log(message)
