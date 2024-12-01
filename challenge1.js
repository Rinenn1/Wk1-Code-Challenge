function grades() {
    let score = Number(prompt("What is your score?: "));

    if (score < 0 || score > 100) {
        console.log("Invalid input! Please enter a number between 0 and 100.");
        return;
    } else if (score > 79) {
        console.log("Your Grade is A");
    } 
    
}

grades();