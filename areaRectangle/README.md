# Area of a Rectangular Room

Create a program that calculates the area of a room. Prompt the user for the length and width of the room in feet. Then display the area in both square ft and square meters.

## Constraints

* Keep the calculations separate from the output.
* Use a constant to hold the conversion factor.
## Inputs, Processes, and Outputs

```text
inputs
    length in ft
    width in ft
processes
    convert input to number
    calculate the area in ft
    convert ft to meters
output
    square ft
    square meters
```

## Tests

```text
inputs:
    15
    20
outputs:
    You entered dimensions of 15 feet by 20 feet.
    
    The area is 
    300 square feet
    27.871 square meters
```

## Pseudocode ( CLI version )

### Initial 
``` text
Import readline from node:readline/promises
Import stdin, stdout from node:process
Initialize rl with readline.createInteface(stdin, stdout)

Initialize conversionFactor with 0.09290304

Initialize length with "What is the length of the room in feet? "
Initialize width with "What is the width of the room in feet? "
Number(length)
Number(width)

rl.close

Initialize areaFt with length * width
Initialize areaM with Math.round(((areaFt * conversionFactor) + Number.EPSILON) * 1000) / 1000

Initialize answer with `

You entered dimensions of $length by $width feet.

The area is

$areaFt square feet
$areaM square meters.
'

console.log(answer)
```

### Challenge code

```text
Import readline
Import stdin, stdout
Initialize rl as readline.createInterface

Initialize FT2_TO_METER2 with 0.09290304
Initialize METER2_TO_FT2 with 10.76391042
Initialize userInput with object {
    unit: null,
    length: null,
    width: null,
    areaFt: null,
    areaM: null,
} // by design object will be mutated directly.

async function getInput (userInput)
    function isInputValid => check that input > 0 && input is not NaN

    do
        assign userInput.unit with question "Choose input unit. (f)Feet (m)Meters :"
    while userInput.unit is not f and m

    do 
        assign userInput.length with user input Number("What is the length of the room? ")
    while NOT isInputValid(userInput.length)

    do 
        assign userInput.width with user input Number("What is the width of the room? ")
    while NOT isInputValid(userInput.width)
    return userInput // not really needed as object is mutated in place, but I always like to return something from a function.

function feetToMeters = ft => ft * FT2_TO_METER2
function metersToFeet = m => m * METER2_TO_FT2
function roundToDecimal = num, place 
    Initialize deci with Math.pow(10, place) to get the value needed for decimal place
    return Math.round( ( num + Number.EPSILON ) * deci ) / deci 

function calculateArea = input
    Initialize area with input.length * input.width

    check if input.unit is 'f'
        assign input.areaFt with area
        assign input.areaM with roundToDecimal(feetToMeters(area), 3) // user chose feet, so convert ft to meters
    else 
        assign input.areaM with area
        assign input.areaFt with roundToDecimal(metersToFeet(area), 3) // user chose meters, convert m to ft
    end

    return input // again not really needed, but I like to return something from functs

await getInput(userInput)
rl.close // closing readline interface

Initialize length, width, unit, areaFt, areaM from userInput //destructure

Initialize answer with `

You entered dimensions of ${length} by ${width} ${unit === 'f' ? 'feet' : 'meters'}.

The area is

${areaFt} square feet
${areaM} square meters.
`
Display answer
```

## Extra Challenges
- [x] Revise the program to ensure the inputs are entered as numeric calues. Don't allow the user to proceed if the value entered is not numeric.
- [x] Create a new version of the program that allows you to choose feet or meters for the input.
- [ ] Implement this program as a GUI program that automatically updates the values when any value changes. 