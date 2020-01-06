function returnEvenNumbers(numberArray) {
    var arrayToFill = [];
    for(i=0; i<numberArray.length; i++) {
        if(numberArray[i] % 2 === 0) {
            arrayToFill.push(numberArray[i]);
        }
    }
    return arrayToFill;
}

returnEvenNumbers([1,4,2,5,7,9,31,19,72,18]);

// With filter() method:
function removeOddNumberWithFilterMethod(numberArray) {
    var evenNumbers = numberArray.filter(function(number) {
        return number % 2 === 0;
    })
    return evenNumbers;
}

console.log(removeOddNumberWithFilterMethod([1,3,5,8,3,9,12,13,18,19]));
