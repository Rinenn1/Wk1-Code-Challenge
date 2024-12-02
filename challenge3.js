function checkNetSalary(){
    let basicSalary = Number(prompt("What is your basic Monthly Salary?: "));

    let grossSalary = basicSalary * 12;

    let nssfDeduction = Math.min(basicSalary * 0.06, 1080);

        // NHIF Deduction using basic if-else
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
    
        // PAYE Calculation
    let deductions = nhifDeduction + nssfDeduction;

    let taxablePay = basicSalary - deductions;

    let payee = 0;
    if (taxablePay > 0 && taxablePay <= 24000) {
        first = payee += (taxablePay * 0.1);
    }
    if (taxablePay > 288000 && taxablePay <= 388000){
        second = payee += taxablePay * 0.25
    }
    if (taxablePay > 388000 && taxablePay <= 6000000){
        third = payee += taxablePay * 0.3
    }
    if (taxablePay > 6000000 && taxablePay <= 9600000){
        fourth = payee += taxablePay * 0.325
    }
    if (taxablePay > 9600000) {
        fifth = payee += taxablePay * 0.35
    }
    
    let totalPayee = first + second + third + fourth + fifth;

    // Net Salary
    let selfBenefits = deductions + totalPayee;
    const netSalary = basicSalary - selfBenefits;
    
    return { basicSalary, selfBenefits, netSalary };
}
    
