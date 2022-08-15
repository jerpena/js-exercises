import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface({ input: stdin, output: stdout });

const SLICES_PER_PIZZA = 8;

const getInput = async () => {
    let slicesPerPerson = 1, numPizza = 0;
    let hasPizza = await rl.question('Do you already have a pizza? (y,n) ');

    if (hasPizza !== 'y' && hasPizza !== 'n') {
        return process.exit();
    } else if (hasPizza === 'y') {
        hasPizza = true;
    } else {
        hasPizza = false;
    }

    const numPeople = Number(await rl.question('How many people? '));
    if (!(numPeople > 0 && !isNaN(numPeople))) return process.exit();

    if (hasPizza) {
        slicesPerPerson = Number(await rl.question('How many slices per person? '));
        if (!(slicesPerPerson > 0 && !isNaN(slicesPerPerson))) return process.exit();
    } else {
        numPizza = Number(await rl.question('How many pizzas? '));
        if (!(numPizza > 0 && !isNaN(numPizza))) return process.exit();
    }

    const totalSlices = hasPizza ? numPeople * slicesPerPerson : numPizza * SLICES_PER_PIZZA;
    return { hasPizza, numPeople, numPizza, totalSlices, slicesPerPerson };
};

const calculateSlices = input => {
    const newObj = { ...input };
    newObj.slicesPerPerson = Math.floor(newObj.totalSlices / newObj.numPeople);
    newObj.leftOverSlices = newObj.totalSlices % newObj.numPeople;
    return newObj;
};

const calculatePizzas = input => {
    const newObj = { ...input };
    newObj.numPizza = Math.ceil(newObj.totalSlices / SLICES_PER_PIZZA);
    newObj.leftOverSlices = (newObj.numPizza * SLICES_PER_PIZZA) % newObj.numPeople;
    return newObj;
};

const displayMessage = ({ hasPizza, numPeople, numPizza, slicesPerPerson, leftOverSlices }) => {
    let message = '';

    if (hasPizza) {
        message = `
${numPeople} people with ${slicesPerPerson} ${slicesPerPerson !== 1 ? 'slices' : 'slice'} each.

You need to buy ${numPizza} ${numPizza !== 1 ? 'pizzas' : 'pizza'}

You will have ${leftOverSlices} leftover ${leftOverSlices !== 1 ? 'slices' : 'slice'}
`;
    } else {
        message = slicesPerPerson === 0 ? `Not enough slices for everyone.` : `
${numPeople} people with ${numPizza} ${numPizza !== 1 ? 'pizzas' : 'pizza'}

Each person gets ${slicesPerPerson} ${slicesPerPerson !== 1 ? 'pieces' : 'piece'} of pizza.

There are ${leftOverSlices} leftover ${leftOverSlices !== 1 ? 'pieces' : 'piece'}.
`;

    }

    console.log(message);
};

const input = await getInput();
rl.close();

const result = input.hasPizza ? calculatePizzas(input) : calculateSlices(input);

displayMessage(result);
