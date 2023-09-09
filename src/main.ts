let firstBool = true;
let secondBool = false;

let firstString = "This is a string";
let secondString = 'And so is this';


let place: string | undefined | null;
console.log("Place value: " + place + " Type: " + typeof(place));

place = "London";
console.log("Place value: " + place + " Type: " + typeof(place));

place = null;
console.log("Place value: " + place + " Type: " + typeof(place));


console.log("Place value: " + place + " Type: " + typeof(place));
console.log(`Place value: ${place} Type: ${typeof(place)}`);
