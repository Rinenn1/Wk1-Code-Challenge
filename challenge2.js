function checkspeed(){
    //input of speed of car
    const speed = Number(prompt("What speed are you going at?: "));
    const limit = 70;

    //if condition to take merits
    if (speed <= limit){
        console.log("OK")
    
    } else if (speed > 70){
        let demeritpoints = Math.ceil((speed - limit)/5)
        console.log(`You have ${demeritpoints}`)

            if (demeritpoints > 12){
                    console.log("License suspended")
            }
    }
    
}

checkspeed();