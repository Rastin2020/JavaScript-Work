// A palindrome is something that is the same forward as it is backwards. 

function isPalindrome(stringInput) {
    var string = stringInput.toUpperCase();
    var pureLetters = string.replace(/\W/g, ""); // The '/\W/g' is a regular expression that basicaly means all
    // non-character keys. SO by putting that as the first parameter for the .replace() function, we're saying replace
    // all the non-character keys with "" (nothing - in other words they're removed). This was things like ! , ? - don't get counted.

    var pureCharacters = pureLetters.split("");
    var reversedCharacters = pureCharacters.reverse();
    var reversedLetters = reversedCharacters.join("");

    if(pureLetters === reversedLetters) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("Hello, how are you?"));
console.log(isPalindrome("Eva, can I stab bats in a cave?"));
console.log(isPalindrome("A nut for a jar of tuna?"));
