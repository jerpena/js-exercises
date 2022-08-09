import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface( { input, output } );

const FT2_TO_METER2 = 0.09290304;
const METER2_TO_FT2 = 10.76391042;
const userInput = {
    unit: null,
    length: null,
    width: null,
    areaFt: null,
    areaM: null,
}

const getInput = async (userInput) => {
    const isInputValid = input => input > 0 && !isNaN(input)

    do
    {
        userInput.unit = await rl.question( `Choose input unit. (f)Feet (m)Meters : ` );
    } while ( userInput.unit != 'f' && userInput.unit != 'm' )

    do
    {
        userInput.length = Number( await rl.question( 'What is the length of the room? ' ) );
    }while ( !isInputValid(userInput.length) )

    do
    {
        userInput.width = Number( await rl.question( 'What is the width of the room? ' ) );
    }while ( !isInputValid(userInput.width))

    return userInput
};


const feetToMeters = ft => ft * FT2_TO_METER2;
const metersToFeet = m => m * METER2_TO_FT2;
const roundToDecimal = ( num, place = 2 ) => {
    const deci = Math.pow( 10, place );
    return Math.round( ( num + Number.EPSILON ) * deci ) / deci;
};

const calculateArea = input => {
    const area = input.length * input.width

    if ( input.unit === 'f' )
    {
        input.areaFt = area
        input.areaM = roundToDecimal(feetToMeters(area), 3)
    } else
    {
        input.areaM = area
        input.areaFt = roundToDecimal(metersToFeet(area), 3)
    }

    return input;
};

await getInput(userInput);
rl.close();

calculateArea(userInput);

const {length, width, unit, areaFt, areaM} = userInput;

const answer = `

You entered dimensions of ${length} by ${width} ${unit === 'f' ? 'feet' : 'meters'}.

The area is

${areaFt} square feet
${areaM} square meters.
`

console.log( answer );