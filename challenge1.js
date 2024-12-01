function grades() {
    let score = Number(prompt("What is your score?: "));

    if (score < 0 || score > 100) {
        console.log("Invalid input! Please enter a number between 0 and 100.");
        return;
    } else if (score > 79) {
        console.log("Your Grade is A");
    } else if (score >= 60 && score <= 79) {
        console.log("Your Grade is B");
    }  else if (score >= 50 && score <= 59) {
        console.log("Your Grade is C");
    } else if (score >= 40 && score <= 49) {
        console.log("Your Grade is D");
    } else {
        console.log("Your Grade is E");
    }

}

grades();