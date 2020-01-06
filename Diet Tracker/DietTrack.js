function inputCaloriesByDay(day) {
    var dayInput = day.toLowerCase();
        if(dayInput === "monday") {
            return 2100;
        } else if(dayInput === "tuesday") {
            return 1500;
        } else if(dayInput === "wednesday") {
            return 1800;
        } else if(dayInput === "thursday") {
            return 1700;
        } else if(dayInput === "friday") {
            return 1700;
        } else if(dayInput === "saturday") {
            return 1950;
        } else if(dayInput === "sunday") {
            return 1800;
        } else {
            return "Please enter a valid day";
        }
}

function getTotalCalories() {
    var sum = inputCaloriesByDay("monday") 
    + inputCaloriesByDay("tuesday")  
    + inputCaloriesByDay("wednesday")  
    + inputCaloriesByDay("thursday")
    + inputCaloriesByDay("friday") 
    + inputCaloriesByDay("saturday") 
    + inputCaloriesByDay("sunday");
    return sum;
}

function getIdealCalories() {
    var idealDailyCalories = 1800;
    return idealDailyCalories*7;
}

function calculateHealthPlan() {
    var actualCalories = getTotalCalories();
    var idealCalories = getIdealCalories();

    if(actualCalories === idealCalories) {
        console.log("You ate the right amount of food!");
    } else if(actualCalories < idealCalories) {
        console.log("Time for seconds!")
    } else {
        console.log("Time to head to the gym!");
    }
}

calculateHealthPlan();
