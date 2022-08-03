/*
    Create a simple tip calculator. The program should ask for the bill amount and
    tip percentage. The program then will compute the tip and display both the tip 
    and total amount of the bill. 

EXTRA CHALLENGES:
    1 Ensure that the user can enter only numbers for the bill amount and the tip rate. 
    2 Keep asking the user for correct input until it is provided.
    3 Don’t allow the user to enter a negative number.
    4 Break the program into functions that do the computations
    5 Implement GUI that automatically updates the values when any value changes.
    6 Instead of the user entering the value of the tip as a percentage, have the user drag 
    a slider that rates satisfaction with the server, using a range between 5% and 20%.

INPUTS/PROCESSES/OUTPUTS: 
    inputs: bill amount, tip percentage
    processes: calculate tip amount
    output: tip amount, total bill

TESTS:
    inputs:
        bill amount: 14.73
        tip percentage: 20
    outputs:
        tip amount: 2.95
        total bill: 17.68

PSEUDOCODE:
    Initialize billAmount to 0
    initialize tip to 0
    initialize tipRate to 0
    initialize totalBill to 0

    prompt for billAmount with "How much is your bill?"
    prompt for tipRate with "How much do you want to tip?"

    convert tipRate to number
    convert billAmount to number
    
    tip = billAmount * (tipRate / 100)
    round tip to nearest cent
    totalBill = billAmount + tip

    display tip with "Your tip is: $tip"
    display totalBill with "Which brings the total to: $totalBill"
*/
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


let billAmount = await rl.question("How much is your bill? ")
let tipRate = await rl.question("How much do you want to tip? ")
let tip = 0;
let totalBill = 0;

billAmount = Number(billAmount)
tipRate = Number(tipRate)
tip = Number((billAmount * (tipRate / 100)).toFixed(2))
totalBill = billAmount + tip

console.log(`Your tip is: ${tip}`)
console.log(`The total is: ${totalBill}`)

rl.close();