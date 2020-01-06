function findSum(lowerRange, upperRange) {
    var sum = 0;

    if(lowerRange < upperRange) {
      for(var i=lowerRange; i<=upperRange; i++) {
          sum+=i;
      }
    }

    if(lowerRange > upperRange) {
        for(var i=lowerRange; i>=upperRange; i--) {
            sum+=i;
        }
    }
      return sum;
}

console.log(findSum(1,4));
console.log(findSum(5,2));
