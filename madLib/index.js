import * as readline from 'node:readline/promises'
import {stdin as input, stdout as output} from 'node:process'

const rl = readline.createInterface({input, output})
// Before Challenges
// const noun = await rl.question("Enter a noun: ")
// const verb = await rl.question("Enter a verb: ")
// const adjective = await rl.question("Enter an adjective: ")
// const adverb = await rl.question("Enter an adverb: ")
// const story = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`

let verbs = await rl.question('Enter 6 VERBS (separate w/space): ')
verbs = verbs.split(' ')
let nouns = await rl.question('Enter 4 NOUNS (separate w/space): ')
nouns = nouns.split(' ')
const properNoun = await rl.question('Enter a PROPER NOUN: ')
const place = await rl.question('Enter a PLACE: ')
const pastTenseVerb = await rl.question('Enter a PAST TENSE VERB: ')
const adjective = await rl.question('Enter an ADJECTIVE: ')
const adverb = await rl.question('Enter an ADVERB: ')

const story = `${verbs[0]} ${verbs[1]} ${verbs[2]}! Hola I am professor ${properNoun}. 
I had a little accident in my ${place}. The original plan was to ${pastTenseVerb} 
a ${nouns[0]}. But after a few ${adjective} mistakes the container with ${adverb} 
${nouns[1]} disappeared. The acidic ${verbs[3]} away!!! This caused all of the ${nouns[2]} 
in the town to ${verbs[4]} and dissolve. So I decided to build a time ${nouns[3]} so I can 
${verbs[5]} the problem.`

console.log(story)

rl.close();