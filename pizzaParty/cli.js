import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface({ input: stdin, output: stdout });

const getInput = async () => {
    const numPeople = await rl.question('How many people? ');
    const numPizza = await rl.question('How many pizzas? ');
    return [numPeople, numPizza];
};

const [numPeople, numPizza] = await getInput();
rl.close();



const displayMessage = message => {
    console.log(message);
};

displayMessage([numPeople, numPizza]);