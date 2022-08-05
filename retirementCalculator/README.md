# Retirement Calculator

Create a program that determines how many years you have left until retirement and the year you can retire. It should prompt for your current age and the age you want to retire and display the output. 

## Constraints

* Do not hard-code the year into your program. Get it from the system time via your programming language

## Inputs, Processes, and Outputs

```text
inputs
    current age
    age of retirement
processes
    convert input into number
    calculate the difference between the ages
    calculate the year of retirement
output
    string with years left to retire, current year, year of retirement
```

## Tests

```text
inputs:
    25
    65
outputs:
    You have 40 years left until you can retire.

    It's 2015, so you can retire in 2055

inputs:
    22
    12
outputs:
    You SHOULD HAVE retired 10 years ago.

    It's 2022, your retirement year was 2012. Get with the program!
```

## Pseudocode ( CLI version )

### **Initial**

``` text
Import readline from node:readline/promises
Import stdin, stdout from node:process

Initialize rl with readline.createInterface
Initialize currentAge with "What is your age? "
Initialize retirementAge with "What age would you like to retire? "

close rl

Initialize yearsToRetirement with retirementAge - currentAge
Initialize currentYear with new Date().getFullYear()
Initialize retirementYear with currentYear + yearsToRetirement

Initialize output with `You have yearsToRetirement years left until you can retire. It's currentYear, so you can retire in retirementYear`

Display output
```
### **Post Challenges**

```text
Import readline from node:readline/promises
Import stdin, stdout from node:process

Initialize rl with readline.createInterface
Initialize currentAge with "What is your age? "
Initialize retirementAge with "What age would you like to retire? "

close rl

Initialize yearsToRetirement with retirementAge - currentAge
Initialize currentYear with new Date().getFullYear()
Initialize retirementYear with currentYear + yearsToRetirement

Initialize message with `You have yearsToRetirement years left until you can retire. It's currentYear, so you can retire in retirementYear`

Initialize overdueMessage with `You SHOULD HAVE retired Math.abs(yearsToRetirement) years ago.

It's currentYear, your retirement year was retirementYear. Get with the program!

if yearsToRetirement < 0 
    Display overdueMessage
else
    Display Message
```
## Extra Challenges
- [x] Handle situations where the program returns a negative number by stating that the user can already retire.
 