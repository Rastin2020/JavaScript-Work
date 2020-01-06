function alphabeOrder (stringInput) {
    var stringArray = stringInput.split("");
    var orderedArray = stringArray.sort();
    var orderedString = orderedArray.join("");
    return orderedString;
}

console.log(alphabeOrder("hello"));
console.log(alphabeOrder("goodbye"));

// OR in one line:

function alphabeOrderOneLine (stringInput) {
    return stringInput.split("").sort().join("");
}

console.log(alphabeOrderOneLine("hello"));
console.log(alphabeOrderOneLine("goodbye"));
