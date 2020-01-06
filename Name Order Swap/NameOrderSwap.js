function nameShuffle(str) {
    var seperated = str.split(" ");
    var reversedName = [];

    for(var i=(seperated.length-1); i>=0; i--){
        reversedName.push(seperated[i]);
    }
    return reversedName.join(" ");
}

console.log(nameShuffle("John Smith"));
console.log(nameShuffle("Albert Einstein"));
console.log(nameShuffle("Rastin Saleh Rasheed"));

console.log("--------------------------------------------------------------------------------------------");

// OR using Reverse() method in one line:

function nameShuffleWithReverseMethod(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(nameShuffle("John Smith"));
console.log(nameShuffle("Albert Einstein"));
console.log(nameShuffle("John Wilkes Booth"));
