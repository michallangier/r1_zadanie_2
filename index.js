import pkg from 'prompt';
const { get } = pkg;

console.log("Podaj liczbę od 1 do 10, masz 20 prób:");
let isLooping = true;
let losowa = Number(Math.floor(Math.random() * 10) + 1);

async function test() {
    // pomoc w trafianiu :)
    console.log(`${losowa} - Trafisz jak ją wpiszesz.`);

    for (let i = 0; i < 20; i++) {

        const result = await get(['liczba']);

        console.log("Wynik: ");
        console.log(result.liczba);

        if (losowa == (result.liczba)) {
            console.log("Udało się");
            isLooping = false;
        }
        else {
            console.log("Spróbuj jeszcze raz...");
            //nadal isLooping == true
        }
        if (isLooping === false) break;
    }
}

test();

