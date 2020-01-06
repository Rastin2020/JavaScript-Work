function longestWord(string) {
    var words = string.replace(/\W/g, " ").split(" "); // The '/\W/g' is a regular expression that basicaly means all
    // non-character keys. SO by putting that as the first parameter for the .replace() function, we're saying replace
    // all the non-character keys with " " (space). This was things like ! , ? - don't get counted.
    var longestword = "";

    for(var i=0; i<words.length; i++) {
        if(longestword.length <= words[i].length) {
            longestword = words[i];
        }
    }
    return longestword.length;
}

console.log(longestWord("This is a sentence example. The longest word is thiswordhere"));
console.log(longestWord("Donde esta el aropuerto?"));
