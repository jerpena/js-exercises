# Tip Calculator

Create a simple tip calculator. The program should ask for the bill amount and
tip percentage. The program then will compute the tip and display both the tip
and total amount of the bill.

## Inputs, Processes, and Outputs
```text
inputs
    bill amount
    tip percentage  
processes
    calculate tip amount  
output
    tip amount
    total bill  
```

## Tests

```text
inputs:
    bill amount: 14.73
    tip percentage: 20
outputs:
    tip amount: 2.95
    total bill: 17.68
```

## Pseudocode ( CLI version )

``` text
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
```


## Extra Challenges
- [x] Ensure that the user can enter only numbers for the bill amount and the tip rate.
- [x] Keep asking the user for correct input until it is provided.
- [x] Don’t allow the user to enter a negative number.
- [x] Break the program into functions that do the computations
- [x] Implement GUI that automatically updates the values when any value changes.
- [x] Instead of the user entering the value of the tip as a percentage, have the user drag a slider that rates satisfaction with the server, using a range between 5% and 20%.