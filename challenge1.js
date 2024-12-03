//Import the readline from node.
import readline from 'readline';

//create an interface for the readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//create the grade function
function grades() {    
    //parse the user input into a variable
    rl.question('What is your score?: ',
        (input) => {
            let score = parseInt(input);

            //if condition for the grades such that "< 0 - is invalid & > 100 is also invalid"
            if (score >= 0 && score <= 100){
                //use ternary operator for the grades
                score > 79 ? console.log("You Have an A") : score >= 60 ? console.log("You have a B") : score > 49 ? console.log("YOu have a C") : score > 40 ? console.log("You have a D") : console.log("You have an E")
            } else {
                console.log("Invalid Input!!")
            }
                
            //close the readline function
            rl.close();

        });
    
}

//call the grade function
grades();