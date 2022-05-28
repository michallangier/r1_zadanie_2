import pkg from 'prompt';
const { get } = pkg;


async function main() {
    let isLooping = true;
    let ranNumber = Number(Math.floor(Math.random() * 10) + 1);
    console.log("Type number from 1 to 10:");
    // helper :) - remove for serious game
    console.log(`${ranNumber} - you win, if typed.`);

    while (isLooping) {

        const result = await get(['typedNumber']);

        console.log(`You have typed: ${result.typedNumber}`);

        if (ranNumber == (result.typedNumber)) {
            console.log("You win");
            isLooping = false;
        }
        else {
            console.log("Try again...");
            // isLooping == true
        }
        if (isLooping === false) break;
    }
}

main();

