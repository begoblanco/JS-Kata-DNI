import { letters } from "./LetterList";

export class DNI {
    constructor(num) {
        if (!Number.isInteger(num) || num < 0 || num > 99999999) {
            throw new Error("Not a valid number");
        }
        this.num = num;
    }

    letterCalculator() {
        const remainder  = this.num % 23;
        console.log(`Number: ${this.num}, Remainder: ${remainder}, Letter: ${letters[remainder]}`);
        return letters[remainder];
    }
}
