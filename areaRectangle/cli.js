import * as readline from 'node:readline/promises'
import {stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({input, output})

const CONVERSION_FACTOR = 0.09290304

let length = await rl.question('What is the length of the room in feet? ')
let width = await rl.question('What is the width of the room in feet? ')
length = Number(length)
width = Number(width)

rl.close();

const areaFt = length * width
let areaM = areaFt * CONVERSION_FACTOR
areaM = Math.round((areaM + Number.EPSILON) * 1000) / 1000;
const answer = `

You entered dimensions of ${length} by ${width} feet.

The area is

${areaFt} square feet
${areaM} square meters.
`

console.log(answer)