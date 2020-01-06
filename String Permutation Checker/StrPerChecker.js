function permutationChecker(string1, string2) {
    if(string1.toUpperCase().split("").sort().join("") === string2.toUpperCase().split("").sort().join("")) {
        return true;
    } else {
        return false;
    }
}

permutationChecker("osnqt","odhte"); // false because those letters can't be rearranged to form the same word.
permutationChecker("Hello", "elhlo") // true because those letters can be rearranged to form at least "Hello".
