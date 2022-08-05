# Simple Math

Write a program that prompts for two numbers. Print the sum, difference, product, and quotient of those numbers as show in the tests.

## Constraints

* Values will be input as strings, Ensure you convert to numbers before doing math.
* Keep inputs and outputs separate from the numerical conversions and other processing.
* Generate single output statement with line breaks in the appropriate spots.

## Inputs, Processes, and Outputs

```text
inputs
    2x numbers as string
processes
    convert input strings to numbers
    calculate the sum of inputs
    calculate the difference of inputs
    calculate the product of inputs
    calculate the quotient of inputs
output
    processes as single statement (string)
```

## Tests

```text
inputs:
    10
    5
outputs:
    10 + 5 = 15
    10 - 5 = 5
    10 * 5 = 50
    10 / 5 = 2

inputs:
    r
outputs:
    Input must be numeric
    What is your first number?

inputs:
    10
    r
outputs:
    Input must be numeric
    What is your second number?
```

## Pseudocode ( CLI version )

### **Initial**

```text
Initialize readline with node:readline/promises
Initialize stdin, stdout with node:process
Initialize rl with readline.createInterface(stdin stdout)

Initialize num1 with "What is your first number? "
Initialize num2 with "WHat is your second number? "

convert num1 to number
convert num2 to number

function getSum => num1 + num2
function getDifference => num1 - num2
function getProduct => num1 * num2
function getQuotient => num1 / num2

Initialize map with [
    [+, getSum]
    [-, getDifference]
    [*, getProduct]
    [/, getQuotient]
]

function buildCalculationString num1, num2
    Initialize calcString with '\n'
    for [key,value] of map
        calcString += `num1 key num2 = value\n`
    end 
    return calcString

Display buildCalculationString

rl.close()
```

### **Revised w/ challenges**

```text
Initialize readline with node:readline/promises
Initialize stdin, stdout with node:process
Initialize rl with readline.createInterface(stdin stdout)

Initialize questions with array: What is your first number? , What is your second number?

function isNumber => num > 0

function inputError => Display Input must be numeric.

async function getInputs questions
    Initialize inputNums with empty array
    loop i < length
        Initialize num with questions[i]
        if not isNumber(num) 
            inputError
            decrement i
            skip rest of loop
        end
        num -> inputNums
    end loop
    close rl
    return inputNums

Initialize num1, num2 with await getInputs(questions)

function getSum => num1 + num2
function getDifference => num1 - num2
function getProduct => num1 * num2
function getQuotient => num1 / num2

Initialize map with [
    [+, getSum]
    [-, getDifference]
    [*, getProduct]
    [/, getQuotient]
]

function buildCalculationString num1, num2
    Initialize calcString with '\n'
    for [key,value] of map
        calcString += `num1 key num2 = value\n`
    end 
    return calcString

Display buildCalculationString

```


## Extra Challenges
- [x] Revise the program to ensure that inputs are entered as numeric values. Don't allow the user to proceed if the value entered is not numeric.
- [x] Don't allow the user to enter a negative number.
- [x] Break the program into functions that do the computations. 
- [x] Implement this program as a GUI program that automatically updates the values when any of them change.