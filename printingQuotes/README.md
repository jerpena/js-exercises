# Printing Quotes

Create a program that prompts for a quote and an author. Display the quotation and author with the author first and the quote with quotation marks.

## Constraints

* Use a single output statement to produce this output, using appropriate string-escaping techniques for quotes.
* If your language supports string interpolation or string substitution, dont use it for this exercise. Use string concatenation instead.
  
## Inputs, Processes, and Outputs

```text
inputs
    quote
    author
processes
    concatenate author and quote
output
    string with author -> quote
```

## Tests

```text
inputs:
    These aren't the droids you're looking for.
    Obi-Wan Kenobi
outputs:
    Obi-Wan Kenobi says, "These aren't the droids you're looking for."
```

## Pseudocode ( CLI version )

``` text
Import * as readline from node:readline
Import {stdin as input, stdout as output} from node:process
Initialize rl with readline.createInterface({input, output})

rl.question "What is the quote? " callback(quote) ->
    rl.question "Who said it? " callback(author) ->
        Display author + says, + \"quote\"
        rl.close()
```

## Extra Challenges
- [x] Modify the program such that instead of prompting user, you create a structure that holds quotes and their authors. Then display all quotes using the format of the test output. 
