//import the readline from node
const readline = require('readline');


//create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//define the fucntion to check the speed
function checkspeed(){
    //prompt the user for input
    rl.question('What speed are you going at?; ', (input) => {
        //parse the input into a variable
        let speed = parseInt(input)

        //define a variable for the speed limit
        const limit = 70;

        //if statement to check the speed
        if (speed <= 70){
            console.log('OK')
        } else {
            //define the variable for the demerits
            const demerit = Math.ceil((speed - limit) / 5);
            if (speed > 70){
                console.log(`You have ${demerit} demerits`)

                //if statement for the suspending of the license
                if (demerit > 12){
                    console.log("License suspended")
                }
            } 
            
        }

        //close the readline function
        rl.close();
    });
}

//call the main function to check the speed
checkspeed();