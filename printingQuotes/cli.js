/* PRE-CHALLENGE
import * as readline from "node:readline"
import {stdin as input, stdout as output} from "node:process"
const rl = readline.createInterface({input, output})

rl.question("What is the quote? ", quote => {
    rl.question("Who said it? ", author => {
        console.log(author + " says, \"" + quote + "\""  )
        rl.close()
    })
})
*/
const quotes = [
    {
        author: 'Nelson Mandela',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
        author: 'Walt Disney',
        quote: 'The way to get started is to quit talking and begin doing.'
    },
    {
        author: 'Steve Jobs',
        quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.'
    },
    {
        author: 'Eleanor Roosevelt',
        quote: 'If life were predictable it would cease to be life, and be without flavor.'
    },
]

for (const item of quotes) {
    console.log(item.author + " says, \"" + item.quote + "\"\n")
}
