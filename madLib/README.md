# Mad Lib

Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.

## Constraints

* Use a single output statement for this program.
* If your language supports string interpolation or string substitution, use it to build up the output.
## Inputs, Processes, and Outputs

```text
inputs
    noun
    verb
    adverb
    adjective
processes
    construct story from inputs
output
    story string (with inputs)
```

## Tests

```text
inputs:
    dog
    walk
    blue
    quickly
outputs:
    Do you walk your blue dog quickly? That's hilarious!
```

## Pseudocode ( CLI version )

``` text
Import readline from node:readline/promises
Import stdin, stdout from node:process
Initialize rl with readline.createInterface(stdin stdout)
Initialize noun with "Enter a noun:"
Initialize verb with "Enter a verb:"
Initialize adjective with "Enter an adjective:"
Initialize adverb with "Enter an adverb:"
Initialize story with inputs

Display story 

close rl
```

## Extra Challenges
- [x] Add more inputs to the program to expand the story.
- [ ] Implement a branching story, where the answers to questions determine how the story is constructed.