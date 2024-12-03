//import the readline from node
import readline from 'readline';

//create an interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkNetSalary(){
    //prompt user for question and store the answer in a variable
    rl.question ("What is your basic Monthly Salary?: ", (input) => {
        let basicSalary = parseInt(input)

        //create variable for nssf deduction
        let nssfDeduction;
        //calculate the nssf deduction
        nssfDeduction = Math.min(basicSalary * 0.06);

        //create a variable for nhif deduction and define it
        let nhifDeduction;

        //claculate the nhif deduction
        if (basicSalary <= 5999) {
            nhifDeduction = 150;
        } else if (basicSalary <= 7999) {
            nhifDeduction = 300;
        } else if (basicSalary <= 11999) {
            nhifDeduction = 400;
        } else if (basicSalary <= 14999) {
            nhifDeduction = 500;
        } else if (basicSalary <= 19999) {
            nhifDeduction = 600;
        } else if (basicSalary <= 24999) {
            nhifDeduction = 750;
        } else if (basicSalary <= 29999) {
            nhifDeduction = 850;
        } else if (basicSalary <= 34999) {
            nhifDeduction = 900;
        } else if (basicSalary <= 39999) {
            nhifDeduction = 950;
        } else if (basicSalary <= 44999) {
            nhifDeduction = 1000;
        } else if (basicSalary <= 49999) {
            nhifDeduction = 1100;
        } else if (basicSalary <= 59999) {
            nhifDeduction = 1200;
        } else if (basicSalary <= 69999) {
            nhifDeduction = 1300;
        } else if (basicSalary <= 79999) {
            nhifDeduction = 1400;
        } else if (basicSalary <= 89999) {
            nhifDeduction = 1500;
        } else if (basicSalary <= 99999) {
            nhifDeduction = 1600;
        } else {
            nhifDeduction = 1700;
        }
    
        // Calculate deductions
        let deductions = nhifDeduction + nssfDeduction;

        // Calculate the taxable pay
        let taxablePay = basicSalary - deductions;

        // Calculate PAYE
        let payee = 0;
        if (taxablePay > 0 && taxablePay <= 24000) {
            payee += taxablePay * 0.1;
        } else if (taxablePay > 24000 && taxablePay <= 288000) {
            payee += 24000 * 0.1;
            payee += (taxablePay - 24000) * 0.25;
        } else if (taxablePay > 288000 && taxablePay <= 388000) {
            payee += 24000 * 0.1;
            payee += (288000 - 24000) * 0.25;
            payee += (taxablePay - 288000) * 0.3;
        } else if (taxablePay > 388000 && taxablePay <= 6000000) {
            payee += 24000 * 0.1;
            payee += (288000 - 24000) * 0.25;
            payee += (388000 - 288000) * 0.3;
            payee += (taxablePay - 388000) * 0.325;
        } else if (taxablePay > 6000000 && taxablePay <= 9600000) {
            payee += 24000 * 0.1;
            payee += (288000 - 24000) * 0.25;
            payee += (388000 - 288000) * 0.3;
            payee += (6000000 - 388000) * 0.325;
            payee += (taxablePay - 6000000) * 0.35;
        } else if (taxablePay > 9600000) {
            payee += 24000 * 0.1;
            payee += (288000 - 24000) * 0.25;
            payee += (388000 - 288000) * 0.3;
            payee += (6000000 - 388000) * 0.325;
            payee += (9600000 - 6000000) * 0.35;
            payee += (taxablePay - 9600000) * 0.4;
        }

        let selfBenefits = deductions + payee;

        // Calculate net salary
        let netsalary = basicSalary - selfBenefits;
        
        // Output the net salary
        console.log(`Your Net Salary is ${netsalary}`)

        rl.close();

    });
   
}
  
checkNetSalary();
