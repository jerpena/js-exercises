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

async function getInput
    Initialize hasPizza with "Have you bought the pizza already? "
    Initialize numPeople with "How many people? "
    if (hasPizza == true) Initialize slicesPerPerson with "How many slices does each person want? "
    else Initialize numPizza with "How many pizzas do you have? "

    return obj {numPeople, numPizza, slicesPerPerson}


function calculateSlices
    Initialize slicesPerPerson with slices / people rounded down
    Initialize leftOverSlices with remainder of slices / people
    return slicesPerPerson, leftOverSlices

function calculatePizzas
    Initialize numOfPizzas with slices * people 


function displayMessage(message)
    log to console $Message

```
## Extra Challenges
- [x] Revise the program to ensure that inputs are entered as numeric values. Don't allow the user to proceed if the input is not numeric.
- [x] Alter the program to handle pluralization properly. For example, Each person gets 2 pieces of pizza or Each person gets 1 piece of pizza. Handle the output for the leftover pieces appropriately as well.
- [x] Create a variant that prompts for the number of people and the number of pieces each person wants, and calculate how many full pizzas you need to purchase.