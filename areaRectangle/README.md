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

## Extra Challenges
- [ ] Revise the program to ensure the inputs are entered as numeric calues. Don't allow the user to proceed if the value entered is not numeric.
- [ ] Create a new version of the program that allows you to choose feet or meters for the input.
- [ ] Implement this program as a GUI program that automatically updates the values when any value changes. 