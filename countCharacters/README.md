# Counting the Number of Characters

Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains.

## Inputs, Processes, and Outputs

```text
inputs
    string 
processes
    count the characters 
output
    input string
    character count
```
## Constraints

* Output must contain original string
* Construct output with single output statement
* Use built-in function of language to get length

## Tests

```text
input
    Homer
output
    Home has 5 characters.
```

## Pseudocode ( CLI version )

```nodejs
Import readline from readline/promises
Import stdin, stdout from process
Initialize rl with readline.createInterface(stdin, stdout)
Initialize input with "What is the input string?"

Display ${input} has ${input.length} characters.

rl.close()
```


## Extra Challenges

- [x] If nothing is entered, state user must enter something into program
- [x] Implement program using a GUI and update character count every time a key is pressed.
