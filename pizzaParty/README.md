# Pizza Party

Write a program to evenly divide pizzas. Prompt for the number of people, the number of pizzas, and the number of slices per pizza. Ensure that the number of pieces comes out even. Display the number of pieces of pizza each person should get. If there are leftovers, show the number of leftover pieces.

## Constraints

* Deal with remainder as a whole number instead of a decimal.
  
## Inputs, Processes, and Outputs

```text
inputs
    number of people
    number of pizzas
processes
    calculate slices per person
output
    slices per person
    leftover slices
```

## Tests

```text
inputs:
    8 people
    2 pizzas
outputs:
    8 people with 2 pizzas
    Each person gets 2 pieces of pizza.

    There are 0 leftover pieces.

inputs:
    9 people
    3 pizzas
outputs:
    9 people with 3 pizzas
    Each person gets 2 pieces of pizza.

    There are 6 leftover pieces.

inputs:
    9 people
    1 pizza
outputs:
    Not enough slices per person.
```

## Pseudocode ( CLI version )

### Initial
``` text
import readline
import stdin, stdout
Initialize rl with readline.createInterface

async function getInput
    Initialize numPeople with "How many people? "
    Initialize numPizza with "How many pizzas do you have? "
    Initialize numSlices with "How many slices in each pizza? "

    return array[numPeople, numPizza, numSlices] 

Initialize numPeople, numPizza, numSlices with await getInput()
close rl


function calculate 
    Initialize slicesPerPerson with slices / people rounded down
    Initialize leftOverSlices with remainder of slices / people
    return slicesPerPerson, leftOverSlices


function displayMessage(message)
    log to console $Message

```
### Challenges
``` text
import readline
import stdin, stdout
Initialize rl with readline.createInterface
Initialize SLICES_PER_PIZZA with 8

function isValidInput 
    return input > 0 && !isNaN(input)


async function getInput
    Initialize slicesPerPerson with 1
    Initialize numPizza with 0
    Initialize hasPizza with "Have you bought the pizza already? (y,n) "
    if hasPizza ! y || n
        exit
    else if hasPizza is y
        hasPizza = true
    else 
        hasPizza = false

    Initialize numPeople with "How many people? "
    if !isValidInput(numPeople) return exit

    if (hasPizza == true)
        assign slicesPerPerson to "How many slices does each person want? "
        if !isValidInput(slicesPerPerson) return exit
    else 
        assign numPizza to "How many pizzas do you have? "
        if !isValidInput(numPizza) return exit
    
    Initialize totalSlices with hasPizza ? numPeople * slicesPerPerson : numPeople * SLICES_PER_PIZZA


    return obj { hasPizza, numPeople, numPizza, totalSlices, slicesPerPerson }


function calculateSlices
    Initialize obj
    Initialize slicesPerPerson with Math.floor(totalSlices / numPeople)
    Initialize leftOverSlices withtotalSlices % numPeople
    return obj

function calculatePizzas
    Initialize obj with input
    Initialize numPizza with Math.ceil(totalSlices / SLICES_PER_PIZZA)
    Initialize leftOverSlices with (numPizza * SLICES_PER_PIZZA) % numPeople
    return obj


function displayMessage(input obj)
    Initialize message with ""

    if hasPizza 
        message = `
        ${numPeople} people with ${slicesPerPerson} ${slicesPerPerson !== 1 ? 'slices' : 'slice'} each.

        You need to buy ${numPizza} ${numPizza !== 1 ? 'pizzas' : 'pizza'}

        You will have ${leftOverSlices} leftover ${leftOverSlices !== 1 ? 'slices' : 'slice'}
        `;
    else 
        message = slicesPerPerson === 0 ? `Not enough slices for everyone.` : `
        ${numPeople} people with ${numPizza} ${numPizza !== 1 ? 'pizzas' : 'pizza'}

        Each person gets ${slicesPerPerson} ${slicesPerPerson !== 1 ? 'pieces' : 'piece'} of pizza.

        There are ${leftOverSlices} leftover ${leftOverSlices !== 1 ? 'pieces' : 'piece'}
    display message

```
## Extra Challenges
- [x] Revise the program to ensure that inputs are entered as numeric values. Don't allow the user to proceed if the input is not numeric.
- [x] Alter the program to handle pluralization properly. For example, Each person gets 2 pieces of pizza or Each person gets 1 piece of pizza. Handle the output for the leftover pieces appropriately as well.
- [x] Create a variant that prompts for the number of people and the number of pieces each person wants, and calculate how many full pizzas you need to purchase.