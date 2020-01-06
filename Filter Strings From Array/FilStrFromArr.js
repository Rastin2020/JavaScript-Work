// Using filter() method:

function numberFilter(array) {
    return filter = array.filter(function(item) {
        return typeof item === "number";
    })
}

console.log(numberFilter(["a", 143, "c", "rods", 6]));
console.log(numberFilter([12, 135656, "c", "rods", 6, "crack"]));

// Using filter() method with arrow function:

function numberFilterWithArrowFunction(array) {
    return array.filter(item => typeof item === "number");
}

console.log(numberFilterWithArrowFunction(["a", 143, "c", "rods", 6]));
console.log(numberFilterWithArrowFunction([12, 135656, "c", "rods", 6, "crack"]));

// Using for loop:

function numberFilterWithForLoop(array) {
    var filter = [];

    for(var i=0; i<array.length; i++) {
        if(typeof array[i] === "number") {
            filter.push(array[i]);
        }
    }
    return filter;
}

console.log(numberFilterWithForLoop(["a", 143, "c", "rods", 6]));
console.log(numberFilterWithForLoop([12, 135656, "c", "rods", 6, "crack"]));
