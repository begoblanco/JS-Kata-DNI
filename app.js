import promptSync from "prompt-sync";
import { DNI } from "./src/js/DNI.js";

const prompt = promptSync();

function askForDNI() {
  const input = prompt("Enter your DNI number: ");

  const dniNumber = parseInt(input, 10);

  if (isNaN(dniNumber) || dniNumber < 0 || dniNumber > 99999999) {
    console.log("The input is not a valid number.");
  } else {
    const dni = new DNI(dniNumber);
    const letter = dni.letterCalculator();
    console.log(`The letter for the DNI ${dniNumber} is ${letter}`);
  }
}
askForDNI();
