function largestNumber(numberArray) {
    var largestValue = 0;

    for(var i=0; i<numberArray.length; i++) {
        if(numberArray[i]>largestValue) {
            largestValue = numberArray[i];
        }
    }
    return largestValue;
}

console.log(largestNumber([1,5,8,13,74,32,9]));
console.log(largestNumber([100,55345,865,1233,7204,3082,90997]));

// Using another non-loop approach:

function largestNumberWithMaxMethod(numberArray) {
    return Math.max(...numberArray);
}

console.log(largestNumberWithMaxMethod([1,5,8,13,74,32,9]));
console.log(largestNumberWithMaxMethod([100,55345,865,1233,7204,3082,90997]));
